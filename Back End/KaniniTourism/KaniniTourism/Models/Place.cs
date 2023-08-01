using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
using Xunit.Sdk;

namespace KaniniTourism.Models
{
    public class Place
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }

        [Required(ErrorMessage = "Location is required.")]
        public string? Location { get; set; }

        [Required(ErrorMessage = "Description is required.")]
        public string? Description { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required(ErrorMessage = "Image name is required.")]
        public string? ImageName { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Please upload an image.")]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public string? ImageSrc { get; set; }

        public ICollection<Spot>? Spots { get; set; } = new List<Spot>();
        public ICollection<Package> Packages { get; set; } = new List<Package>();
    }
}
