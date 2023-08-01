using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Xunit.Sdk;

namespace KaniniTourism.Models
{


    public class Booking
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookId { get; set; }

        [Required(ErrorMessage = "User ID is required.")]
        [ForeignKey("Admin_User")]
        public int? Id { get; set; }

        [Required(ErrorMessage = "Start date is required.")]
        [Column(TypeName = "date")]
        public DateTime? StartDate { get; set; }

        [Range(1, 5, ErrorMessage = "Adult count must be at least 1.")]
        public int? AdultCount { get; set; }

        [Range(0, 2, ErrorMessage = "Child count cannot be negative.")]
        public int? ChildCount { get; set; }

        [Required(ErrorMessage = "Package ID is required.")]
        [ForeignKey("PackageOffering")]
        public int? PackageID { get; set; }

        public ICollection<Transaction>? Transactions { get; set; } = new List<Transaction>();
    }

}