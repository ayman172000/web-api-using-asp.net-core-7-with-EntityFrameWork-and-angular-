using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DepSalaries.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "departements",
                columns: table => new
                {
                    DepartementId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NameDep = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CodeDep = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_departements", x => x.DepartementId);
                });

            migrationBuilder.CreateTable(
                name: "salaries",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: true),
                    Salaire = table.Column<double>(type: "float", nullable: true),
                    DepartementId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_salaries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_salaries_departements_DepartementId",
                        column: x => x.DepartementId,
                        principalTable: "departements",
                        principalColumn: "DepartementId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_salaries_DepartementId",
                table: "salaries",
                column: "DepartementId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "salaries");

            migrationBuilder.DropTable(
                name: "departements");
        }
    }
}
