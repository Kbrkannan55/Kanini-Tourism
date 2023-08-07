using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KaniniTourism.Controllers;
using KaniniTourism.GlobalExceptions;
using KaniniTourism.Models;
using KaniniTourism.Repository.TravelAgentRequest;
using loginauth.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;

namespace KaniniTourism.Tests
{
    [TestFixture]
    public class TravelRepoTests
    {
        private TourismContext _context;
        private TravelRepo _travelRepo;

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

            _travelRepo = new TravelRepo(_context);
        }

        [TearDown]
        public void TearDown()
        {
            _context.Database.EnsureDeleted();
            _context.Dispose();
        }

        [Test]
        public async Task GetAllTravelAgentRequest_ReturnsListOfTravelAgents()
        {
            // Arrange
            var agent = new TravelAgent
            {
                Email = "test1@example.com",
                Name = "Agent 1",
                Password = "password",
                Phone = 1234567890,
                Role = "Agent",
                Username = "agent1"
            };

            _context.travelAgents.Add(agent);
            _context.SaveChanges();

            // Act
            var result = await _travelRepo.GetAllTravelAgentRequest();

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<ActionResult<List<TravelAgent>>>(result);
            Assert.AreEqual(1, result.Value.Count());
        }

        [Test]
        public async Task PostRequestForTravelAgent_AddsTravelAgentAndReturnsListOfTravelAgents()
        {
            // Arrange
            var newTravelAgent = new TravelAgent
            {
                Email = "newagent@example.com",
                Name = "New Agent",
                Password = "password",
                Phone = 5555555555,
                Role = "Agent",
                Username = "newagent"
                // Set other properties as needed
            };

            // Act
            var result = await _travelRepo.PostRequestForTravelAgent(newTravelAgent);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<ActionResult<List<TravelAgent>>>(result);
            Assert.AreEqual(1, result.Value.Count());
        }

        [Test]
        public async Task DeleteTravelAgent_RemovesTravelAgentAndReturnsListOfTravelAgents()
        {
            // Arrange
            var testData = new List<TravelAgent>
            {
                new TravelAgent { Email = "test1@example.com", Name = "Agent 1", Password = "password", Phone = 1234567890, Role = "Agent", Username = "agent1" },
                new TravelAgent { Email = "test2@example.com", Name = "Agent 2", Password = "password", Phone = 9876543210, Role = "Agent", Username = "agent2" }
                // Add more test data if needed
            };

            _context.travelAgents.AddRange(testData);
            _context.SaveChanges();

            var agentToDelete = testData[0];

            // Act
            var result = await _travelRepo.DeleteTravelAgent(agentToDelete.Id);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<ActionResult<List<TravelAgent>>>(result);
            Assert.AreEqual(testData.Count - 1, result.Value.Count());
        }
    }
}
