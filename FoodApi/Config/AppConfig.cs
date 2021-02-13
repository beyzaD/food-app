namespace FoodApp
{
    public class AppConfig
    {
        public Logging Logging { get; set; }
        public Azure Azure { get; set; }
        public GraphCfg GraphCfg { get; set; }
        public string AllowedHosts { get; set; }
    }


    public class LogLevel
    {
        public string Default { get; set; }
        public string Microsoft { get; set; }
    }

    public class Logging
    {
        public LogLevel LogLevel { get; set; }
    }

    public class ApplicationInsights
    {
        public string InstrumentationKey { get; set; }
    }

    public class Azure
    {
        public ApplicationInsights ApplicationInsights { get; set; }
    }

}