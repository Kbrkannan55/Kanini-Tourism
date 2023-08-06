using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
using Xunit.Sdk;

namespace KaniniTourism.Models
{
    public class Package
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? PackageID { get; set; }

        [Required(ErrorMessage = "User ID is required.")]
        [ForeignKey("User")]
        public int? Id { get; set; }

        [Required(ErrorMessage = "Offer type is required.")]
        public string? PackageType { get; set; }

        [Required(ErrorMessage = "Offer description is required.")]
        public string? Description { get; set; }

        [Required(ErrorMessage = "Price per person is required.")]
        public string? PricePerPerson { get; set; }

        [Required(ErrorMessage = "Source is required.")]
        public string? Source { get; set; }

        [Required(ErrorMessage = "Destination is required.")]
        public string? Destination { get; set; }

        [Required(ErrorMessage = "Vehicle type is required.")]
        public string? VehicleType { get; set; }

        [Required(ErrorMessage = "Number of days is required.")]
        [Range(1, int.MaxValue, ErrorMessage = "Number of days must be at least 1.")]
        public int? Days { get; set; }

        [Required(ErrorMessage = "Number of nights is required.")]
        [Range(1, int.MaxValue, ErrorMessage = "Number of nights must be at least 1.")]
        public int? Nights { get; set; }

        [Required(ErrorMessage = "Total number of days is required.")]
        [Range(1, int.MaxValue, ErrorMessage = "Total number of days must be at least 1.")]
        public int? Totaldays { get; set; }

        [Required(ErrorMessage = "Itinerary details are required.")]
        public string? ItineraryDetails { get; set; }


        [Required(ErrorMessage = "Place ID is required.")]
        [ForeignKey("Place")]
        public int? PlaceId { get; set; }

        [Required(ErrorMessage = "Hotel ID is required.")]
        [ForeignKey("Hotel")]
        public int? HotelId { get; set; }


        public ICollection<Booking>? Booking { get; set; } = new List<Booking>();
    }
}
