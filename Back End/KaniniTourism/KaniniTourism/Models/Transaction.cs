using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KaniniTourism.Models
{
    public class Transaction
    {
        [Key]
        public int? Id { get; set; }
        public bool? Status { get; set; }
        [ForeignKey("Id")]
        public Booking? BookingId { get; set; }

        public ICollection<Transaction>? Transactions { get; set;}

    }
}
