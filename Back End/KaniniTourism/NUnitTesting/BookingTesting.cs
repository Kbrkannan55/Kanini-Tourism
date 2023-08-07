using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KaniniTourism.GlobalExceptions;
using KaniniTourism.Models;
using KaniniTourism.Repository.BookingServices;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;

namespace KaniniTourism.Tests
{
    [TestFixture]
    public class BookingRepoTests
    {
        private TourismContext _context;
        private BookingRepo _bookingRepo;

        [SetUp]
        public void Setup()
        {
            var serviceProvider = new ServiceCollection()
                .AddEntityFrameworkInMemoryDatabase()
                .BuildServiceProvider();

            var options = new DbContextOptionsBuilder<TourismContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .UseInternalServiceProvider(serviceProvider)
                .Options;

            _context = new TourismContext(options);
            _bookingRepo = new BookingRepo(_context);
        }

        [TearDown]
        public void TearDown()
        {
            _context.Database.EnsureDeleted();
            _context.Dispose();
        }

        [Test]
        public async Task GetAllBookings_ReturnsListOfBookings()
        {
            // Arrange
            var bookingsData = new List<Booking>
            {
                new Booking { BookId = 1, Id = 1, StartDate = DateTime.Now, Count = 2, PackageID = 1 },
                new Booking { BookId = 2, Id = 2, StartDate = DateTime.Now.AddDays(1), Count = 3, PackageID = 2 }
                // Add more test data if needed
            };

            _context.bookings.AddRange(bookingsData);
            await _context.SaveChangesAsync();

            // Act
            var result = await _bookingRepo.GetAllBookings();

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<ActionResult<List<Booking>>>(result);
            Assert.AreEqual(bookingsData.Count, result.Value.Count);
        }

        [Test]
        public async Task PostBookings_AddsBookingAndReturnsListOfBookings()
        {
            // Arrange
            var newBooking = new Booking
            {
                BookId = 3,
                Id = 3,
                StartDate = DateTime.Now.AddDays(2),
                Count = 4,
                PackageID = 3
            };

            // Act
            var result = await _bookingRepo.PostBookings(newBooking);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<ActionResult<List<Booking>>>(result);
            Assert.AreEqual(1, result.Value.Count);
            Assert.AreEqual(newBooking.BookId, result.Value[0].BookId);
        }
    }
}
