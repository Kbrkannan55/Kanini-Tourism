using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KaniniTourism.Models
{
    public class Place
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }
        public string? PlaceName { get; set; }
        [NotMapped]
        public IFormFile? PlaceImage { get; set; }
        [NotMapped]
        public string? ImageSrc { get; set; }
    }
}
