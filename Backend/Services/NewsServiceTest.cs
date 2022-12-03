using Xunit;
using LandcareResearch.Services;
using LandcareResearch.Models;

public class NewsServiceTest
{
    [Fact]
    public async void ShouldReturnArticles()
    {
        var result = await NewsService.GetArticles();

        Assert.IsType<List<Article>>(result);
    }
}