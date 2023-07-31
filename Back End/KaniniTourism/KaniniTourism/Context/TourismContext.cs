using KaniniTourism.Models;
using loginauth.Models;
using Microsoft.EntityFrameworkCore;

namespace loginauth.Context
{
    public class TourismContext : DbContext
    {
        public TourismContext(DbContextOptions<TourismContext> options) : base(options) { }
        public DbSet<User> users { get; set; }
        public DbSet<Place> places { get; set; }
        public DbSet<Booking> bookings { get; set; }
        public DbSet<Hotels> hotels { get; set; }
        public DbSet<ImageGallery> imageGallery { get; set; }   
        public DbSet<Package> packages { get; set; }
        public DbSet<Spot> spots { get; set; }
        public DbSet<Transaction> transaction { get; set; }
        public DbSet<TravelAgent> travelAgents { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
       

        }
    }
}
