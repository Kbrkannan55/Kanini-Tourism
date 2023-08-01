using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace KaniniTourism.Models
{
    public class TravelAgent
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Aadharnumber { get; set; }
        public string? Role { get; set; }
        public long? Phone { get; set; }
        public string? AgencyName { get; set; }
        public string? AgencyDescription { get; set; }

    }
}