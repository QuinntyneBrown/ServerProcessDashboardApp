using Microsoft.AspNet.SignalR;
using Microsoft.Practices.Unity;
using System.Web.Http;
using ServerProcessDashboard.Server.Data;
using ServerProcessDashboard.Server.Data.Contracts;
using ServerProcessDashboard.Server.Hubs;
using Unity.WebApi;
using ServerProcessDashboard.Server.Services.Contracts;
using ServerProcessDashboard.Server.Services;
using Microsoft.AspNet.SignalR.Hubs;

namespace ServerProcessDashboard
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = GetContainer();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }

        public static UnityContainer GetContainer()
        {
            var container = new UnityContainer();
            container.RegisterType<IUow, Uow>();
            container.RegisterType<IRepositoryProvider, RepositoryProvider>();
            container.RegisterType<ISessionService, SessionService>();
            container.RegisterType<IIdentityService, IdentityService>();
            container.RegisterType<IEncryptionService, EncryptionService>();
            container.RegisterType<ISearchService, SearchService>();
            container.RegisterType<ICacheProvider, CacheProvider>();
            container.RegisterType<IServerProcessDashboardHub, ServerProcessDashboardHub>();
            container.RegisterType<ISecurityService, SecurityService>();
            return container;
        }
    }
}