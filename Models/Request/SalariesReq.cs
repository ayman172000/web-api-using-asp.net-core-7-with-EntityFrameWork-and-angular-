namespace exam.Models.Request
{
    public class SalariesReq
    {
        public string? LastName { get; set; }
        public string? FirstName { get; set; }
        public int? Age { get; set; }

        public double? Salaire { get; set; }
        public long? DepartementId { get; set; }
    }
}
