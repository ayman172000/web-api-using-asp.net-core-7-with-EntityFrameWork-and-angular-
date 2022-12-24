namespace exam.Models.Request
{
    public class updateSalarieReq
    {
        public long Id { get; set; }

        public string? LastName { get; set; }
        public string? FirstName { get; set; }
        public int? Age { get; set; }

        public double? Salaire { get; set; }
    }
}
