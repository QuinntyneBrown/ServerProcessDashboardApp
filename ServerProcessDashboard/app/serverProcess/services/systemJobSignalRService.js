var ServerProcessModule;
(function (ServerProcessModule) {
    var ServerProcessSignalRService = (function () {
        function ServerProcessSignalRService($rootScope, $) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.$ = $;
            this.connection = null;
            this.hub = null;
            this.run = function (name, step) {
                _this.hub.invoke("run", name, step);
            };
            this.runStart = function () {
                _this.$rootScope.$broadcast("serverProcessRunStart");
            };
            this.$inject = ["$rootScope", "$"];
            this.connection = this.$.hubConnection();
            this.hub = this.connection.createHubProxy("serverProcessHub");
            this.hub.on("serverProcessRunStart", function (update) {
                _this.runStart();
            });
            this.connection.start(function () {
            });
            this.$rootScope.$on("serverProcessRunRequest", function (event, object) {
                _this.run(object.entity.name, object.entity.step);
            });
        }
        return ServerProcessSignalRService;
    })();
    angular.module("serverProcess").service("serverProcessSignalRService", function ($rootScope, $) { return new ServerProcessSignalRService($rootScope, $); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=systemJobSignalRService.js.map