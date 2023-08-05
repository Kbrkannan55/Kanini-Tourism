using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KaniniTourism.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [StringLength(50, ErrorMessage = "Username cannot exceed 50 characters.")]
        public string? Username { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "Password must be at least 6 characters.")]
        public string? Password { get; set; }

        public string? Token { get; set; }

        public string? Role { get; set; }

        [RegularExpression(@"^\d{10}$", ErrorMessage = "Invalid phone number.")]
        public long? Phone { get; set; }

        [StringLength(100, ErrorMessage = "Agency name cannot exceed 100 characters.")]
        public string? Name { get; set; }

        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }

        public ICollection<ImageGallery>? AdminImages { get; set; } = new List<ImageGallery>();
        public ICollection<Package>? Packages { get; set; } = new List<Package>();
        public ICollection<Booking>? Books { get; set; } = new List<Booking>();
    }
}
