using ServerProcessDashboard.Server.Data;
using ServerProcessDashboard.Server.Models;
using ServerProcessDashboard.Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Migrations
{
    public class RoleConfiguration
    {
        public static void Seed(DbContext context)
        {
            if (context.Roles.Count() < 1)
            {
                context.Roles.Add(new Role() { Name = "System" });

                context.SaveChanges();
            }
        }
    }
}