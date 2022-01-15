using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodApp;
using Microsoft.AspNetCore.Mvc;
//using food-api.Models;

namespace FoodApi
{
    [Route("[controller]")]
    [ApiController]
    public class ConfigController : ControllerBase
    {
        public ConfigController()
        {
        }

        [HttpGet("")]
        public ActionResult<FoodConfig> GetConfig()
        {
            return null;
        }

        // http://localhost:PORT/config/env
        [HttpGet("env")]
        public object GetEnv () {
            return Environment.GetEnvironmentVariables();;
        }
    }
}