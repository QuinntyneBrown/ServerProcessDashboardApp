module ServerProcessModule {

    "use strict";

    var serviceId = "serverProcessRouteResolver";

    angular.module("serverProcess").service(serviceId, ["$location", "$q", "$route", "configurationService", "securityUow", "serverProcessUow", service]);

    function service($location, $q, $route, configurationService, securityUow, serverProcessUow) {

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
