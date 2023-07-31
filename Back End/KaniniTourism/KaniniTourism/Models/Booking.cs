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
        public DateTime? StartDate { get; set; }
        [Column(TypeName = "Date")]
        public DateTime? EndDate { get; set; }
        [ForeignKey("User")]
        public string? Username { get; set; }

        [ForeignKey("Package")]
        public int? PackageId { get; set; }


        public ICollection<Transaction>? Transactions { get; set; }

    }
}
