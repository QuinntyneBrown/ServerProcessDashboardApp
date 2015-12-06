var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var serviceId = "serverProcessRouteResolver";
    angular.module("serverProcess").service(serviceId, ["$location", "$q", "$route", "configurationService", "securityUow", "serverProcessUow", service]);
    function service($location, $q, $route, configurationService, securityUow, serverProcessUow) {
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
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessRouteResolver.js.map