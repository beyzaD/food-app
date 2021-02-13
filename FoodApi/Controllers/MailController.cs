using System;
using System.Collections.Generic;
using FoodApi;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace FoodApi
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        AppConfig config { get; set; }
        public MailController(IOptions<AppConfig> cfg)
        {
            config = (AppConfig)cfg.Value;
        }

        [HttpGet]
        public ActionResult SendMail()
        {
            // FoodApp.GraphHelper.Send("Hello World", "A msg from me", new[] { "alexander.pajer@integrations.at" }, config.GraphCfg);
            return Ok();
        }
    }
}