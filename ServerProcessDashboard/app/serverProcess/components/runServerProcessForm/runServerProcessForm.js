var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var RunServerProcessForm = (function () {
        function RunServerProcessForm(serverProcessService) {
            var _this = this;
            this.serverProcessService = serverProcessService;
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/serverProcess/components/runServerProcessForm/runServerProcessForm.html";
            this.link = function (scope, element, attributes) {
                scope.tryToRun = function (form) {
                    return _this.serverProcessService.run({ model: scope.entity }).then(function () {
                    });
                };
            };
            this.$inject = ["serverProcessService"];
        }
        RunServerProcessForm.componentId = "runServerProcessForm";
        return RunServerProcessForm;
    })();
    angular.module("serverProcess").directive(RunServerProcessForm.componentId, function (serverProcessService) { return new RunServerProcessForm(serverProcessService); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=runServerProcessForm.js.map