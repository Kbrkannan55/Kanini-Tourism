using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace KaniniTourism.Models
{
    public class ImageGallery
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AdminImgsId { get; set; }

        [Required(ErrorMessage = "Location name is required.")]
        [StringLength(50, ErrorMessage = "Location name cannot exceed 50 characters.")]
        public string? LocationName { get; set; }

        [Required(ErrorMessage = "Location description is required.")]
        [StringLength(50, ErrorMessage = "Location description cannot exceed 50 characters.")]
        public string? LocationDescription { get; set; }

        [StringLength(100, ErrorMessage = "Image name cannot exceed 100 characters.")]
        public string? ImageName { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Please upload an image.")]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public string? ImageSrc { get; set; }
    }
}
