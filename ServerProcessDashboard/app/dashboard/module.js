var DashboardModule;
(function (DashboardModule) {
    angular.module("dashboard", [
        "configuration",
        "common",
        "core",
        "session",
        "security",
        "serverProcess",
        "ngRoute"
    ]).config(config).run(run);
    config.$inject = ["$compileProvider", "$httpProvider", "$locationProvider", "$routeProvider", "$rootScopeProvider"];
    function config($compileProvider, $httpProvider, $locationProvider, $routeProvider, $rootScopeProvider) {
        $rootScopeProvider.digestTtl(8);
        $httpProvider.interceptors.push("authorizationInterceptor");
        $httpProvider.useApplyAsync(true);
        $locationProvider.html5Mode(false);
        $compileProvider.debugInfoEnabled(false);
        $routeProvider.when("/", {
            templateUrl: "app/dashboard/templates/splash.html",
            resolve: {
                routeData: [
                    "serverProcessDashboardRouteResolver",
                    function (serverProcessDashboardRouteResolver) {
                        return serverProcessDashboardRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: false,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/signin", {
            templateUrl: "app/dashboard/templates/signin.html",
            resolve: {
                routeData: [
                    "serverProcessDashboardRouteResolver",
                    function (serverProcessDashboardRouteResolver) {
                        return serverProcessDashboardRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: false,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/dashboard", {
            templateUrl: "app/dashboard/templates/dashboard.html",
            resolve: {
                routeData: [
                    "serverProcessDashboardRouteResolver",
                    function (serverProcessDashboardRouteResolver) {
                        return serverProcessDashboardRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/version", {
            templateUrl: "app/dashboard/templates/version.html",
            resolve: {
                routeData: [
                    "serverProcessDashboardRouteResolver",
                    function (serverProcessDashboardRouteResolver) {
                        return serverProcessDashboardRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.otherwise("/");
    }
    run.$inject = ["$http", "$location", "$rootScope", "$route", "$templateCache", "currentUser", "serverProcessDashboardSignalRService", "token"];
    function run($http, $location, $rootScope, $route, $templateCache, currentUser, serverProcessDashboardSignalRService, token) {
        $rootScope.$on("$routeChangeStart", function (event, newUrl) {
            $rootScope.inViewTransition = true;
            if (newUrl.originalPath == "/signin") {
                token.set({ data: null });
            }
            ;
            if (newUrl.$$route && newUrl.$$route.authorizationRequired) {
                if (token.get() == null) {
                    $rootScope.$evalAsync(function () {
                        $location.path("/signin");
                    });
                }
                ;
            }
            ;
        });
        $rootScope.$on("$viewContentLoaded", function () {
            $rootScope.inViewTransition = false;
            if ($route.current.$$route.authorizationRequired && (currentUser.get() == null || currentUser.get() == "")) {
                $location.path("/signin");
            }
            ;
        });
    }
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=module.js.map