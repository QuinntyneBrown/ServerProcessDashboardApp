using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.Provider;
using ServerProcessDashboard.Server.Config;

namespace ServerProcessDashboard.Server.Api.v1
{
    public class AppConfigurationController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(AppConfiguration.Config);
        }
    }
}
