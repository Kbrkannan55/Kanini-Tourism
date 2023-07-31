using loginauth.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KaniniTourism.Models
{
    public class Booking
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }
        [Column(TypeName ="Date")]
        public DateOnly? StartDate { get; set; }
        [Column(TypeName = "Date")]
        public DateOnly? EndDate { get; set; }
        [ForeignKey("Username")]
        public User? UserName { get; set; }
        [ForeignKey("Id")]
        public Package? PackageId { get; set; }

        public ICollection<User>? Users { get; set; }
        public ICollection<Package>? packages { get; set; }

    }
}
