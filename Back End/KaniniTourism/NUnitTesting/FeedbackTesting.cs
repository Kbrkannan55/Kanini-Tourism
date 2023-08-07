using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KaniniTourism.Controllers;
using KaniniTourism.GlobalExceptions;
using KaniniTourism.Models;
using KaniniTourism.Repository.FeedbackServices;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;

namespace KaniniTourism.Tests
{
    [TestFixture]
    public class FeedbackTests
    {
        private TourismContext _context;
        private FeedbackRepo _feedbackRepo;
        private FeedbackController _feedbackController;

        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<TourismContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            _context = new TourismContext(options);
            _feedbackRepo = new FeedbackRepo(_context);
            _feedbackController = new FeedbackController(_feedbackRepo);
        }

        [TearDown]
        public void TearDown()
        {
            _context.Database.EnsureDeleted();
            _context.Dispose();
        }

        [Test]
        public async Task GetAllFeedback_ReturnsListOfFeedback()
        {
            // Arrange
            var feedbackData = new List<Feedback>
            {
                new Feedback { Id = 1, Email = "email1@example.com", Name = "John Doe", Subject = "Subject 1", Message = "Excellent" },
                new Feedback { Id = 2, Email = "email2@example.com", Name = "Jane Smith", Subject = "Subject 2", Message = "Good" }
                // Add more test data if needed
            };

            _context.feedbacks.AddRange(feedbackData);
            await _context.SaveChangesAsync();

            // Act
            var result = await _feedbackController.GetAllFeedback();

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<ActionResult<List<Feedback>>>(result);
            Assert.AreEqual(feedbackData.Count, result.Value.Count());
        }

        [Test]
        public async Task PostFeedback_AddsFeedbackAndReturnsListOfFeedback()
        {
            // Arrange
            var newFeedback = new Feedback
            {
                Id = 3,
                Email = "email3@example.com",
                Name = "Alice Johnson",
                Subject = "Subject 3",
                Message = "Very Satisfied"
            };

            // Act
            var result = await _feedbackController.PostFeedback(newFeedback);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<ActionResult<List<Feedback>>>(result);
            Assert.AreEqual(1, result.Value.Count());
            Assert.AreEqual(newFeedback.Id, result.Value.First().Id);
        }
    }
}
