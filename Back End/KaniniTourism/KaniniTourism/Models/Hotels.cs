using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace KaniniTourism.Models
{
    public class Hotels
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int? HotelId { get; set; }
        public string? HotelName { get; set; }
        public string? HotelDescription { get; set; }
        public double? Ratings { get; set; }
        public int? PricePerPerson { get; set; }
        public int HotelRoomsAvailable { get; set; }
        public string? FoodType { get; set; }
        public string? HotelLocation { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? ImageName { get; set; }

        [NotMapped]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public string? ImageSrc { get; set; }
        public ICollection<Package>? PackageOfferings { get; set; } = new List<Package>();


    }
}