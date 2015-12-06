using ServerProcessDashboard.Server.Config;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ServerProcessDashboard.Server.Api.v1
{
    public class ConfigurationController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(AppConfiguration.Config);
        }
    }
}
