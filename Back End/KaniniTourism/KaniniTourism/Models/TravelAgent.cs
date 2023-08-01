using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KaniniTourism.Models
{
    public class TravelAgent
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage = "Username is required.")]
        [StringLength(50, ErrorMessage = "Username cannot exceed 50 characters.")]
        public string? Username { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "Password must be at least 6 characters.")]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Aadhar number is required.")]
        [RegularExpression(@"^\d{12}$", ErrorMessage = "Invalid Aadhar number.")]
        public string? Aadharnumber { get; set; }

        [Required(ErrorMessage = "Role is required.")]
        public string? Role { get; set; }

        [Required(ErrorMessage = "Phone number is required.")]
        [RegularExpression(@"^\d{10}$", ErrorMessage = "Invalid phone number.")]
        public long? Phone { get; set; }

        [Required(ErrorMessage = "Agency name is required.")]
        [StringLength(100, ErrorMessage = "Agency name cannot exceed 100 characters.")]
        public string? AgencyName { get; set; }

        [Required(ErrorMessage = "Agency description is required.")]
        [StringLength(500, ErrorMessage = "Agency description cannot exceed 500 characters.")]
        public string? AgencyDescription { get; set; }
    }
}
