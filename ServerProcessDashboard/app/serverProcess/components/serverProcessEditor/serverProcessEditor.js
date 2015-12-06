var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var ServerProcessEditor = (function () {
        function ServerProcessEditor(serverProcessUow) {
            this.serverProcessUow = serverProcessUow;
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/serverProcess/components/serverProcessEditor/serverProcessEditor.html";
            this.link = function (scope, element, attributes) {
                scope.save = function (form) {
                };
            };
            this.$inject = ["serverProcessUow"];
        }
        ServerProcessEditor.componentId = "serverProcessEditor";
        return ServerProcessEditor;
    })();
    angular.module("serverProcess").directive(ServerProcessEditor.componentId, function (serverProcessUow) { return new ServerProcessEditor(serverProcessUow); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessEditor.js.map