using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace KaniniTourism.Models
{
    public class ImageGallery
    {
        [Key]
        public int AdminImgsId { get; set; }

        [ForeignKey("Admin_User")]
        public int? Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string? LocationName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string? Locationdescription { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? ImageName { get; set; }

        [NotMapped]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public string? ImageSrc { get; set; }
    }
}