(function () {
    "use strict";
    function preferencesController($scope, dataService, preferencesData) {
        var vm = this;
        vm = {
            pageTitle: "Preferences",
            startScreen: preferencesData.Client.StartScreen,
            poDisplayLimit: preferencesData.Client.PoDisplayLimit
        };
        vm.update = function (clientPreferences) {
            vm.startScreen = clientPreferences.startScreen;
            vm.poDisplayLimit = clientPreferences.poDisplayLimit;
            dataService.updateClientPreferences({
                "StartScreen": vm.startScreen,
                "PoDisplayLimit": vm.poDisplayLimit
            }).then(function () {
            }).catch(function (error) {
            });
        };
        return vm;
    }
    preferencesController.$inject = ["$scope", "dataService", "preferencesData"];
    angular.module("user").controller("preferencesController", preferencesController);
})();
//# sourceMappingURL=preferencesController.js.map