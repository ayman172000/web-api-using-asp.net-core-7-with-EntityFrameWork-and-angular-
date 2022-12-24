using System.ComponentModel.DataAnnotations.Schema;

namespace exam.Models
{
    public class Salarie
    {
        public long Id { get; set; }
        public string? LastName { get; set; }
        public string? FirstName { get; set; }
        public int? Age { get; set; }

        public double? Salaire{ get; set; }

        [ForeignKey("Departement")]
        public long DepartementId { get; set; }
        public virtual Departement Departement { get; set; }
    }
}
