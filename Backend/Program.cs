var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("NewsServicePolicy",
        policy =>
        {
            var origin = Environment.GetEnvironmentVariable("FRONTEND_DEV_URL") ?? "";
            policy.WithOrigins(origin)
            .WithMethods("PUT", "DELETE", "GET", "POST");
        });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();
app.UseCors();
app.UseAuthorization();
app.MapControllers();

app.Run(Environment.GetEnvironmentVariable("BACKEND_DEV_URL"));
