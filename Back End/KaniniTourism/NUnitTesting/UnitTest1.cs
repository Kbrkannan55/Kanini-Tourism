using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KaniniTourism.Models;
using KaniniTourism.Repository.BookingServices;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using NUnit.Framework;

namespace KaniniTourism.Tests
{
    [TestFixture]
    public class BookingRepoTests
    {
        private Mock<TourismContext> _contextMock;
        private BookingRepo _bookingRepo;

        [SetUp]
        public void Setup()
        {
            _contextMock = new Mock<TourismContext>();
            _bookingRepo = new BookingRepo(_contextMock.Object);
        }

        [Test]
        public async Task GetAllBookings_ReturnsListOfBookings()
        {
            // Arrange
            var testData = new List<Booking>
            {
                new Booking { BookId = 1, StartDate = DateTime.Now.Date, Count = 2, PackageID = 1 },
                new Booking { BookId = 2, StartDate = DateTime.Now.Date.AddDays(7), Count = 4, PackageID = 2 },
            };

            _contextMock.Setup(x => x.bookings).Returns(MockDbSet(testData));

            // Act
            var result = await _bookingRepo.GetAllBookings();

            // Assert
            Assert.IsInstanceOf<ActionResult<List<Booking>>>(result);
            var actionResult = result as ActionResult<List<Booking>>;
            Assert.IsInstanceOf<OkObjectResult>(actionResult?.Result);
            var okResult = actionResult?.Result as OkObjectResult;
            Assert.IsNotNull(okResult?.Value);
            var bookingList = okResult?.Value as List<Booking>;
            Assert.AreEqual(testData.Count, bookingList?.Count);
        }

        [Test]
        public async Task PostBookings_ValidBooking_ReturnsListOfBookings()
        {
            // Arrange
            var booking = new Booking { StartDate = DateTime.Now.Date, Count = 3, PackageID = 1 };

            _contextMock.Setup(x => x.bookings).Returns(MockDbSet(new List<Booking>()));

            // Act
            var result = await _bookingRepo.PostBookings(booking);

            // Assert
            Assert.IsInstanceOf<ActionResult<List<Booking>>>(result);
            var actionResult = result as ActionResult<List<Booking>>;
            Assert.IsInstanceOf<OkObjectResult>(actionResult?.Result);
            var okResult = actionResult?.Result as OkObjectResult;
            Assert.IsNotNull(okResult?.Value);
            var bookingList = okResult?.Value as List<Booking>;
            Assert.AreEqual(1, bookingList?.Count);
        }

        private DbSet<T> MockDbSet<T>(List<T> data) where T : class
        {
            var queryable = data.AsQueryable();
            var dbSet = new Mock<DbSet<T>>();
            dbSet.As<IQueryable<T>>().Setup(m => m.Provider).Returns(queryable.Provider);
            dbSet.As<IQueryable<T>>().Setup(m => m.Expression).Returns(queryable.Expression);
            dbSet.As<IQueryable<T>>().Setup(m => m.ElementType).Returns(queryable.ElementType);
            dbSet.As<IQueryable<T>>().Setup(m => m.GetEnumerator()).Returns(() => queryable.GetEnumerator());
            return dbSet.Object;
        }
    }
}
