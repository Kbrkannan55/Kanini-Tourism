using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KaniniTourism.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "feedbacks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Subject = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Message = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_feedbacks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "hotels",
                columns: table => new
                {
                    HotelId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HotelName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HotelDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ratings = table.Column<double>(type: "float", nullable: true),
                    PricePerPerson = table.Column<int>(type: "int", nullable: true),
                    HotelRoomsAvailable = table.Column<int>(type: "int", nullable: false),
                    FoodType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HotelLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_hotels", x => x.HotelId);
                });

            migrationBuilder.CreateTable(
                name: "places",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_places", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "travelAgents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Aadharnumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<long>(type: "bigint", nullable: false),
                    AgencyName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    AgencyDescription = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_travelAgents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Token = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<long>(type: "bigint", nullable: false),
                    AgencyName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    AgencyDescription = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Aadharnumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RefreshToken = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RefreshTokenExpiryTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "spots",
                columns: table => new
                {
                    SpotId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlaceId = table.Column<int>(type: "int", nullable: false),
                    SpotLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_spots", x => x.SpotId);
                    table.ForeignKey(
                        name: "FK_spots_places_PlaceId",
                        column: x => x.PlaceId,
                        principalTable: "places",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "imageGallery",
                columns: table => new
                {
                    AdminImgsId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LocationName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    LocationDescription = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_imageGallery", x => x.AdminImgsId);
                    table.ForeignKey(
                        name: "FK_imageGallery_users_UserId",
                        column: x => x.UserId,
                        principalTable: "users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "packages",
                columns: table => new
                {
                    PackageID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id = table.Column<int>(type: "int", nullable: false),
                    OfferType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OfferDesc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    In_Out_India = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    PricePerPerson = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Source = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Destination = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VehicleType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Days = table.Column<int>(type: "int", nullable: false),
                    Nights = table.Column<int>(type: "int", nullable: false),
                    Totaldays = table.Column<int>(type: "int", nullable: false),
                    ItineraryDetails = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PlaceId = table.Column<int>(type: "int", nullable: false),
                    HotelId = table.Column<int>(type: "int", nullable: false),
                    HotelsHotelId = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_packages", x => x.PackageID);
                    table.ForeignKey(
                        name: "FK_packages_hotels_HotelsHotelId",
                        column: x => x.HotelsHotelId,
                        principalTable: "hotels",
                        principalColumn: "HotelId");
                    table.ForeignKey(
                        name: "FK_packages_places_PlaceId",
                        column: x => x.PlaceId,
                        principalTable: "places",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_packages_users_UserId",
                        column: x => x.UserId,
                        principalTable: "users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "bookings",
                columns: table => new
                {
                    BookId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id = table.Column<int>(type: "int", nullable: false),
                    StartDate = table.Column<DateTime>(type: "date", nullable: false),
                    AdultCount = table.Column<int>(type: "int", nullable: true),
                    ChildCount = table.Column<int>(type: "int", nullable: true),
                    PackageID = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bookings", x => x.BookId);
                    table.ForeignKey(
                        name: "FK_bookings_packages_PackageID",
                        column: x => x.PackageID,
                        principalTable: "packages",
                        principalColumn: "PackageID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_bookings_users_UserId",
                        column: x => x.UserId,
                        principalTable: "users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "transaction",
                columns: table => new
                {
                    TranactionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BookId = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: true),
                    TotalAmount = table.Column<double>(type: "float", nullable: true),
                    BookingBookId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_transaction", x => x.TranactionId);
                    table.ForeignKey(
                        name: "FK_transaction_bookings_BookingBookId",
                        column: x => x.BookingBookId,
                        principalTable: "bookings",
                        principalColumn: "BookId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_bookings_PackageID",
                table: "bookings",
                column: "PackageID");

            migrationBuilder.CreateIndex(
                name: "IX_bookings_UserId",
                table: "bookings",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_imageGallery_UserId",
                table: "imageGallery",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_packages_HotelsHotelId",
                table: "packages",
                column: "HotelsHotelId");

            migrationBuilder.CreateIndex(
                name: "IX_packages_PlaceId",
                table: "packages",
                column: "PlaceId");

            migrationBuilder.CreateIndex(
                name: "IX_packages_UserId",
                table: "packages",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_spots_PlaceId",
                table: "spots",
                column: "PlaceId");

            migrationBuilder.CreateIndex(
                name: "IX_transaction_BookingBookId",
                table: "transaction",
                column: "BookingBookId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "feedbacks");

            migrationBuilder.DropTable(
                name: "imageGallery");

            migrationBuilder.DropTable(
                name: "spots");

            migrationBuilder.DropTable(
                name: "transaction");

            migrationBuilder.DropTable(
                name: "travelAgents");

            migrationBuilder.DropTable(
                name: "bookings");

            migrationBuilder.DropTable(
                name: "packages");

            migrationBuilder.DropTable(
                name: "hotels");

            migrationBuilder.DropTable(
                name: "places");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
