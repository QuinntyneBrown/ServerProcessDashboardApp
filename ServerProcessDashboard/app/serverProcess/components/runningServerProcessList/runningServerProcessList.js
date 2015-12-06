var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var RunningServerProcessList = (function () {
        function RunningServerProcessList(serverProcessService) {
            this.serverProcessService = serverProcessService;
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/serverProcess/components/runningServerProcessList/runningServerProcessList.html";
            this.link = function (scope, element, attributes) {
                scope.save = function (form) {
                };
            };
            this.$inject = ["serverProcessService"];
        }
        RunningServerProcessList.componentId = "runningServerProcessList";
        return RunningServerProcessList;
    })();
    angular.module("serverProcess").directive(RunningServerProcessList.componentId, function (serverProcessService) { return new RunningServerProcessList(serverProcessService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=runningServerProcessList.js.map