using ServerProcessDashboard.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Dto.v1
{
    public class ModuleDto
    {
        public ModuleDto()
        {

        }

        public string Name { get; set; }
        public string Description { get; set; }
    }
}