using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace KaniniTourism.Models
{
    public class Booking
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookId { get; set; }

        [ForeignKey("Admin_User")]
        public int? Id { get; set; }

        [Column(TypeName = "date")]
        public DateTime? StartDate { get; set; }

        public int? AdultCount { get; set; }
        public int? ChildCount { get; set; }

        [ForeignKey("PackageOffering")]
        public int? PackageID { get; set; }

        public ICollection<Transaction>? Transactions { get; set; } = new List<Transaction>();


    }
}