var ServerProcessModule;
(function (ServerProcessModule) {
    "use strict";
    var ServerProcessMenu = (function () {
        function ServerProcessMenu() {
            this.$inject = [];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/serverProcess/components/serverProcessMenu/serverProcessMenu.html";
            this.link = function (scope, element, attributes) {
            };
        }
        ServerProcessMenu.componentId = "serverProcessMenu";
        return ServerProcessMenu;
    })();
    angular.module("serverProcess").directive(ServerProcessMenu.componentId, function () { return new ServerProcessMenu(); });
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=serverProcessMenu.js.map