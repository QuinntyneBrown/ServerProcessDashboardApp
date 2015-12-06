(():void => {

    "use strict";

    function preferencesController($scope, dataService, preferencesData) {
        var vm = this;

        vm = {
            pageTitle: "Preferences",
            startScreen: preferencesData.Client.StartScreen,
            poDisplayLimit: preferencesData.Client.PoDisplayLimit
        };


        vm.update = (clientPreferences) => {
            vm.startScreen = clientPreferences.startScreen;
            vm.poDisplayLimit = clientPreferences.poDisplayLimit;

            dataService.updateClientPreferences({
                "StartScreen": vm.startScreen,
                "PoDisplayLimit": vm.poDisplayLimit
            }).then(() =>{

            }).catch((error) => {

            });
        };
        return vm;
    }

    preferencesController.$inject = ["$scope","dataService", "preferencesData"];

    angular.module("user").controller("preferencesController", preferencesController);

})(); 