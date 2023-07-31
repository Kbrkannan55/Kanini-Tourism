using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KaniniTourism.Models
{
    public class Transaction
    {
        [Key]
        public int? Id { get; set; }
        public bool? Status { get; set; }
        [ForeignKey("Booking")]
        public int? BookingId { get; set; }
    }
}
