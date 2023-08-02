using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace KaniniTourism.Models
{
    public class Transaction
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TranactionId { get; set; }

        [ForeignKey("Booking")]
        public int BookId { get; set; }

        [Required(ErrorMessage ="Total Amount is Required")]
        [Range(0, 1, ErrorMessage = "Status must be either 0 or 1.")]
        public int? Status { get; set; }
        
        public double? TotalAmount { get; set; }
    }
}
