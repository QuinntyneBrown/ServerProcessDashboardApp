using ServerProcessDashboard.Server.Dto.v1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Services.Contracts
{
    public interface ISearchService
    {
        SearchResultsDto SimpleSearch(string term);
    }
}