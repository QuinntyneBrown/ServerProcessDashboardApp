var CoreModule;
(function (CoreModule) {
    var app = angular.module("core", ["configuration", "session"]).config(config);
    config.$inject = ["$httpProvider"];
    function config($httpProvider) {
        $httpProvider.interceptors.push("authorizationInterceptor");
        $httpProvider.interceptors.push("requestCounter");
    }
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=module.js.map