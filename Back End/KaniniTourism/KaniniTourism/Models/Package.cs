using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace KaniniTourism.Models
{
    public class Package
    {
        [Key]
        public int? PackageID { get; set; }

        [ForeignKey("Admin_User")]
        public int? Id { get; set; }

        public string? OfferType { get; set; }
        public string? OfferDesc { get; set; }
        public string? In_Out_India { get; set; }
        public string? ImageName { get; set; }
        public string? PricePerPerson { get; set; }
        public string? Source { get; set; }
        public string? Destination { get; set; }
        public string? VehicleType { get; set; }
        public string? Location { get; set; }
        public int? Days { get; set; }
        public int? Nights { get; set; }
        public int? Totaldays { get; set; }
        public string? ItineraryDetails { get; set; }

        [ForeignKey("Hotel")]
        public int? HotelId { get; set; }

        [NotMapped]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public string? ImageSrc { get; set; }

        public ICollection<Booking>? Booking { get; set; } = new List<Booking>();

    }
}