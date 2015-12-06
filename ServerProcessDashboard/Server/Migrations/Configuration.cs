using ServerProcessDashboard.Server.Migrations;

namespace ServerProcessDashboard.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ServerProcessDashboard.Server.Data.DbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ServerProcessDashboard.Server.Data.DbContext context)
        {
            RoleConfiguration.Seed(context);
            UserConfiguration.Seed(context);
        }
    }
}
