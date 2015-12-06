var ServerProcessModule;
(function (ServerProcessModule) {
    var ServerProcessUow = (function () {
        function ServerProcessUow(serverProcessService) {
            this.serverProcessService = serverProcessService;
            this.serverProcesss = this.serverProcessService;
            this.$inject = ["serverProcessService"];
        }
        ServerProcessUow.serviceId = "serverProcessUow";
        return ServerProcessUow;
    })();
    angular.module("serverProcess").service(ServerProcessUow.serviceId, function (serverProcessService) { return new ServerProcessUow(serverProcessService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessUow.js.map