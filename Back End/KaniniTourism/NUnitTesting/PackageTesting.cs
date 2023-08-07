using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KaniniTourism.Controllers;
using KaniniTourism.GlobalExceptions;
using KaniniTourism.Models;
using KaniniTourism.Repository.PackageServices;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;

namespace KaniniTourism.Tests
{
    [TestFixture]
    public class PackageTests
    {
        private TourismContext _context;
        private PackageRepo _packageRepo;
        private PackageController _packageController;

        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<TourismContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            _context = new TourismContext(options);

            // Populate the context with test data
            _context.packages.AddRange(new List<Package>
            {
                new Package { Id = 1, PackageType = "Type 1", Description = "Description 1", PricePerPerson = "100", Source = "Source 1", Destination = "Dest 1", VehicleType = "Vehicle 1", Days = 5, Nights = 4, Totaldays = 9, ItineraryDetails = "Details 1", PlaceId = 1, HotelId = 1 },
                new Package { Id = 2, PackageType = "Type 2", Description = "Description 2", PricePerPerson = "200", Source = "Source 2", Destination = "Dest 2", VehicleType = "Vehicle 2", Days = 7, Nights = 6, Totaldays = 13, ItineraryDetails = "Details 2", PlaceId = 2, HotelId = 2 }
                // Add more test data if needed
            });

            _context.SaveChanges();

            _packageRepo = new PackageRepo(_context);
            _packageController = new PackageController(_packageRepo);
        }

        [TearDown]
        public void TearDown()
        {
            _context.Database.EnsureDeleted();
            _context.Dispose();
        }

        [Test]
        public async Task GetAllPackages_ReturnsListOfPackages()
        {
            // Act
            var result = await _packageController.GetAllPackages();

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<ActionResult<List<Package>>>(result);
            Assert.AreEqual(2, result.Value.Count());
        }

        [Test]
        public async Task GetFilteredPackages_ReturnsListOfFilteredPackages()
        {
            // Act
            var result = await _packageController.GetFiltedPackages("Type 1", "Dest 1", "Vehicle 1");

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<ActionResult<List<Package>>>(result);
            Assert.AreEqual(1, result.Value.Count);
            Assert.AreEqual("Type 1", result.Value[0].PackageType);
            Assert.AreEqual("Dest 1", result.Value[0].Destination);
            Assert.AreEqual("Vehicle 1", result.Value[0].VehicleType);
        }
    }
}
