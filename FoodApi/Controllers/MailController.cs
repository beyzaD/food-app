using System;
using System.Collections.Generic;
using FoodApp;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace FoodApi
{
    [Route("[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        FoodConfig config { get; set; }
        public MailController(IOptions<FoodConfig> cfg)
        {
            config = (FoodConfig)cfg.Value;
        }

        [HttpPost]
        [Route("sendMail")]
        public ActionResult SendMail(FoodItem item)
        {
            FoodApp.GraphHelper.Send("Save this for later",JsonSerializer.Serialize(item) , new[] { config.GraphCfg.mailSender }, config);
            return Ok();
        }
    }
}