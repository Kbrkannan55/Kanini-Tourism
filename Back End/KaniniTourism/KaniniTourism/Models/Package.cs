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
        [ForeignKey("Id")]
        public Place? PlaceId { get; set; }
        [ForeignKey("Username")]
        public User? Username { get; set; }
        [ForeignKey("Id")]
        public Spot? SpotId { get; set; }
        [ForeignKey("Id")]
        public Hotels? HotelId { get; set; }
        public string? Itinerary { get; set; }
        public string? Transport { get; set; }
        public Decimal? Price { get; set; }



        public ICollection<Place>? Places { get; set;}
        public ICollection<User>? Users { get; set;}
        public ICollection<Spot>? Spots { get; set;}
        public ICollection<Hotels>? Hotels { get; set;}

    }
}
