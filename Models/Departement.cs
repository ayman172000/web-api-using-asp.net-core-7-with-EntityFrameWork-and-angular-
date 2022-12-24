using System.Text.Json.Serialization;

namespace exam.Models
{
    public class Departement
    {

        public long DepartementId { get; set; }
        public string? NameDep{ get; set; }
        public string? CodeDep{ get; set; }

        [JsonIgnore]
        public virtual ICollection<Salarie> Salaries{ get; set; }

    }
}
