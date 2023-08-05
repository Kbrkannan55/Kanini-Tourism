using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
using Xunit.Sdk;

namespace KaniniTourism.Models
{
    public class Spot
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? SpotId { get; set; }

        [Required(ErrorMessage = "Place ID is required.")]
        [ForeignKey("Place")]
        public int? PlaceId { get; set; }

        [Required(ErrorMessage = "Spot location is required.")]
        public string? SpotLocation { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? ImageName { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Please upload an image.")]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public string? ImageSrc { get; set; }

       
    }
}
