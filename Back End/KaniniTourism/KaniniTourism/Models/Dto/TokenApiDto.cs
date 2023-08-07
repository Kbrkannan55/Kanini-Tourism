namespace loginauth.Models.Dto
{
    public class TokenApiDto
    {
        public string AccessToken { get; set; } = string.Empty;
        public string RefreshToken { get; set; } = string.Empty;
        public string Role { get; set; }= string.Empty;
        public int Id { get; set; }
    }
}
