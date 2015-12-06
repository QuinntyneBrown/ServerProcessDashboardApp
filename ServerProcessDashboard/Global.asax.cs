using ServerProcessDashboard.Server.Services.Contracts;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Practices.Unity;
using System.Security.Principal;
using System.Threading;
using Newtonsoft.Json.Serialization;
using System.Data.SqlClient;
using System.Configuration;


namespace ServerProcessDashboard
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_AuthenticateRequest(Object sender, EventArgs e)
        {
            if (HttpContext.Current.Request.Headers["Authorization"] != null && HttpContext.Current.Request.Headers["Authorization"] != "null")
            {
                var encryptionService = UnityConfig.GetContainer().Resolve<IEncryptionService>();
                var sessionService = UnityConfig.GetContainer().Resolve<ISessionService>();

                try
                {
                    var token = HttpContext.Current.Request.Headers["Authorization"].Substring(6);

                    if (token != "null" && token != "undefined")
                    {
                        var sessionId = JsonConvert.DeserializeObject<int>(encryptionService.DecryptString(token));
                        var currentUser = sessionService.GetCurrentUser(sessionId);
                        HttpContext.Current.User = Thread.CurrentPrincipal = new GenericPrincipal(new GenericIdentity(currentUser.Username), currentUser.Roles.Select(x => x.Name).ToArray());
                    }
                }
                catch
                {

                }
            }

        }
        protected void Application_Start(object sender, EventArgs e)
        {
            var jSettings = new JsonSerializerSettings();
            var config = GlobalConfiguration.Configuration;
            jSettings.Formatting = Formatting.Indented;
            jSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            config.Formatters.JsonFormatter.SerializerSettings = jSettings;
            UnityConfig.RegisterComponents();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            
        }

    }
}