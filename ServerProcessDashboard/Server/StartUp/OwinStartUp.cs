using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;

[assembly: OwinStartup(typeof(ServerProcessDashboard.Server.StartUp.OwinStartUp))]
namespace ServerProcessDashboard.Server.StartUp
{
    public class OwinStartUp
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
            app.MapSignalR();
        }
    }
}