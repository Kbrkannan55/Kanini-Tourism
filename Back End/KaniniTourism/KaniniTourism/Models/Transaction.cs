using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace KaniniTourism.Models
{
    public class Transaction
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TranactionId { get; set; }

        [ForeignKey("Book")]
        public int BookId { get; set; }
        public int? status { get; set; }



    }
}