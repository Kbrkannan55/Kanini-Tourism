using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KaniniTourism.Models
{
    public class Feedback
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters.")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Subject is required.")]
        [StringLength(200, ErrorMessage = "Subject cannot exceed 200 characters.")]
        public string? Subject { get; set; }

        [Required(ErrorMessage = "Message is required.")]
        [StringLength(1000, ErrorMessage = "Message cannot exceed 1000 characters.")]
        public string? Message { get; set; }
    }
}
