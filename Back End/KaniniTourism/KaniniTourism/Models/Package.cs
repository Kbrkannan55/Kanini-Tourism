using loginauth.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KaniniTourism.Models
{
    public class Package
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }
        public string? PackageName { get; set; }
        [ForeignKey("Place")]
        public int? PlaceId { get; set; }
        [ForeignKey("User")]
        public string? Username { get; set; }
        [ForeignKey("Spot")]
        public int? SpotId { get; set; }
        [ForeignKey("Hotels")]
        public int? HotelId { get; set; }
        public string? Itinerary { get; set; }
        public string? Transport { get; set; }
        public Decimal? Price { get; set; }

    }
}
