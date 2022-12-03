using LandcareResearch.Models;
using LandcareResearch.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace LandcareResearch.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController : ControllerBase
{
    public NewsController()
    {
    }

    [HttpGet]
    [EnableCors("NewsServicePolicy")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<List<Article>?>> Get() => await NewsService.GetArticles();
    
    [HttpGet("search/{term}")]
    [EnableCors("NewsServicePolicy")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<List<Article>?>> Search(string term) => await NewsService.GetArticles(term);
}