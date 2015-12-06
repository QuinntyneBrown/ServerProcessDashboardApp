var DashboardModule;
(function (DashboardModule) {
    "use strict";
    var serviceId = "serverProcessDashboardRouteResolver";
    angular.module("dashboard").service(serviceId, ["$location", "$q", "$route", "configurationService", "securityUow", service]);
    function service($location, $q, $route, configurationService, securityUow) {
        var self = this;
        self.resolveRoute = function () {
            return configurationService.get().then(function () {
                return securityUow.identity.getCurrentUser().then(function () {
                    return true;
                });
            });
        };
        return self;
    }
    ;
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=simDashboardRouteResolver.js.map