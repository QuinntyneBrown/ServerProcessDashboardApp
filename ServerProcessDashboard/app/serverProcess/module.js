var ServerProcessModule;
(function (ServerProcessModule) {
    var app = angular.module("serverProcess", [
        "configuration",
        "common",
        "core",
        "session",
        "security",
        "ngRoute"
    ]).config(config).run(run);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/serverProcess", {
            templateUrl: "app/serverProcess/templates/list.html",
            resolve: {
                routeData: [
                    "serverProcessRouteResolver",
                    function (serverProcessRouteResolver) {
                        return serverProcessRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true
        });
        $routeProvider.when("/serverProcess/add", {
            templateUrl: "app/serverProcess/templates/add.html",
            resolve: {
                routeData: [
                    "serverProcessRouteResolver",
                    function (serverProcessRouteResolver) {
                        return serverProcessRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true
        });
        $routeProvider.when("/serverProcess/run", {
            templateUrl: "app/serverProcess/templates/runserverProcess.html",
            resolve: {
                routeData: [
                    "serverProcessRouteResolver",
                    function (serverProcessRouteResolver) {
                        return serverProcessRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true
        });
    }
    function run() {
    }
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=module.js.map