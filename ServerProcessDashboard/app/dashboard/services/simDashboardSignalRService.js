var DashboardModule;
(function (DashboardModule) {
    function serverProcessDashboardSignalRService($rootScope) {
    }
    serverProcessDashboardSignalRService.$inject = ["$rootScope"];
    var ServerProcessDashboardSignalRService = (function () {
        function ServerProcessDashboardSignalRService($rootScope, $) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.$ = $;
            this.$inject = ["$rootScope", "$"];
            this.connection = null;
            this.hub = null;
            this.run = function (name, step) {
                _this.hub.invoke("run", name, step);
            };
            this.runStart = function () {
                _this.$rootScope.$broadcast("runStart");
            };
            this.connection = this.$.hubConnection();
            this.hub = this.connection.createHubProxy("serverProcessDashboardHub");
            this.hub.on("serverProcessRunStart", function (update) {
                _this.runStart();
            });
            this.connection.start(function () {
            });
            this.$rootScope.$on("serverProcessRunRequest", function (event, object) {
                _this.run(object.entity.name, object.entity.step);
            });
        }
        ServerProcessDashboardSignalRService.serviceId = "serverProcessDashboardSignalRService";
        return ServerProcessDashboardSignalRService;
    })();
    angular.module("dashboard").service(ServerProcessDashboardSignalRService.serviceId, function ($rootScope, $) { return new ServerProcessDashboardSignalRService($rootScope, $); });
})(DashboardModule || (DashboardModule = {}));
//# sourceMappingURL=simDashboardSignalRService.js.map