using inv_gen_api;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// logger
Log.Logger = new LoggerConfiguration().MinimumLevel.Information()
            .WriteTo.File("log/.txt", rollingInterval: RollingInterval.Day)
            .CreateLogger();
builder.Host.UseSerilog();

builder.Services.AddEndpointsApiExplorer();

var app = builder
    .ConfigurationService()
    .ConfigurationPipeline();

app.UseSerilogRequestLogging();

app.Run();