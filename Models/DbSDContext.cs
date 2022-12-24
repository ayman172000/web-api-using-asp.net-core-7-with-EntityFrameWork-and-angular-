using Microsoft.EntityFrameworkCore;

namespace exam.Models
{
    public class DbSDContext : DbContext
    {
        public DbSDContext(DbContextOptions<DbSDContext> options) : base(options)
        {

        }


        /*protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=DESKTOP-JO98KO7; Database=SDDB;Trusted_Connection=True;Encrypt=False;");
        }*/

        public DbSet<Salarie> salaries { get; set; }
        public DbSet<Departement> departements { get; set; }
    }
}
