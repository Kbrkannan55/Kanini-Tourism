using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace KaniniTourism.Models
{


    public class Hotels
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? HotelId { get; set; }

        [Required(ErrorMessage = "Hotel name is required.")]
        public string? HotelName { get; set; }

        public string? HotelDescription { get; set; }

        [Range(0.0, 5.0, ErrorMessage = "Ratings should be between 0 and 5.")]
        public double? Ratings { get; set; }

        [Range(0, int.MaxValue, ErrorMessage = "Price per person cannot be negative.")]
        public int? PricePerPerson { get; set; }

        [Range(0, int.MaxValue, ErrorMessage = "Number of available rooms cannot be negative.")]
        public int HotelRoomsAvailable { get; set; }

        public string? FoodType { get; set; }

        [Required(ErrorMessage = "Hotel location is required.")]
        public string? HotelLocation { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? ImageName { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Please upload an image.")]
        public IFormFile? ImageFile { get; set; }


        [NotMapped]
        public string? ImageSrc { get; set; }

        public ICollection<Package>? packages { get; set; } = new List<Package>();
    }

}