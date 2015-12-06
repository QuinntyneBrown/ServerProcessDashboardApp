module DashboardModule {

    "use strict";

    var serviceId = "serverProcessDashboardRouteResolver";

    angular.module("dashboard").service(serviceId, ["$location", "$q", "$route", "configurationService", "securityUow", service]);

    function service($location, $q, $route, configurationService, securityUow) {

        var self = this;

        self.resolveRoute = () => {

            return configurationService.get().then(() => {

                return securityUow.identity.getCurrentUser().then(() => {

                    return true;

                });


            });

        };

        return self;

    };

}
