﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Dto.v1
{
    public class SearchResultsDto
    {
        public SearchResultsDto()
        {
            this.Data = new HashSet<dynamic>();
        }
        public ICollection<dynamic> Data { get; set; }
    }
}