using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KaniniTourism.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Token { get; set; }
        public string? Role { get; set; }
        public long? Phone { get; set; }
        public string? AgencyName { get; set; }
        public string? AgencyDescription { get; set; }
        public string? Aadharnumber { get; set; }
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }

        public ICollection<ImageGallery>? AdminImages { get; set; } = new List<ImageGallery>();

        public ICollection<Package>? Packages { get; set; } = new List<Package>();
        public ICollection<Booking>? Books { get; set; } = new List<Booking>();



    }
}