using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Models
{
    public interface ILoggable
    {
        DateTime? CreatedDate { get; set; }
        DateTime? LastModifiedDate { get; set; }
        string LastModifiedByUserName { get; set; }
        int? LastModifiedByUserId { get; set; }
    }
}