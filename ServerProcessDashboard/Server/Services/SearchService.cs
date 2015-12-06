using ServerProcessDashboard.Server.Data.Contracts;
using ServerProcessDashboard.Server.Dto.v1;
using ServerProcessDashboard.Server.Models;
using ServerProcessDashboard.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProcessDashboard.Server.Services
{
    public class SearchService: ISearchService
    {
        protected readonly IUow uow;

        public SearchService(IUow uow)
        {
            this.uow = uow;
        }

        public SearchResultsDto SimpleSearch(string term)
        {

            throw new NotImplementedException();
        }
    }
}