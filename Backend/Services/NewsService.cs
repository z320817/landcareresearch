using LandcareResearch.Models;
using Newtonsoft.Json;

namespace LandcareResearch.Services;

public class NewsService
{
    private static List<Article>? Articles { get ; set; }

    private static string? _API_KEY { get { return Environment.GetEnvironmentVariable("GNEWS_API_KEY");} }

    private static string? TopHeadlinesURL { get { return $"https://gnews.io/api/v4/top-headlines?token={_API_KEY}&lang=en&country=us&max=10"; } }

    private static string? SearchURL { get { return $"https://gnews.io/api/v4/search?q={SearchTerm}&token={_API_KEY}&lang=en&country=us&max=10"; } }

    public static string? SearchTerm { get ; private set; }

    public static async Task<List<Article>?> GetArticles(string term = "")
    {
        try
        {
            HttpClient client = new HttpClient();
            SearchTerm = term.ToLower();
            string? url = (SearchTerm.Length > 0) ? SearchURL : TopHeadlinesURL;

            HttpResponseMessage response = await client.GetAsync(url);
            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<ApiResponse>(responseBody);

            return (data is not null) ? data.Articles : new List<Article>();
        }
            catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return null;
        }
    }
}