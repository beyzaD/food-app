using System;
using System.Collections.Generic;
using FoodApp;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.Extensions.Configuration;

namespace FoodApi
{
    [Route("[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        FoodConfig config { get; set; }
        public MailController(IConfiguration cfg)
        {
            var val = cfg.GetValue<string>("App:AuthEnabled");
            config = cfg.Get<FoodConfig>();
        }

        [HttpPost]
        [Route("sendMail")]
        public ActionResult SendMail(FoodItem item)
        {
            FoodApp.GraphHelper.Send("Take a look at this great food",JsonSerializer.Serialize(item) , new[] { config.GraphCfg.mailSender }, config);
            return Ok();
        }
    }
}