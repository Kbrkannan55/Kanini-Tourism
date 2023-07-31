﻿using System.ComponentModel.DataAnnotations;

namespace KaniniTourism.Models
{
    public class TravelAgent
    {
        [Key]
        public string? Username { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Role { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}