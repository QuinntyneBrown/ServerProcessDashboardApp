describe("EntityAdminMenu Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("common");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/common/components/entityAdminMenu/entityAdminMenu.html", getStringFromUrl("/app/common/components/entityAdminMenu/entityAdminMenu.html"));
        element = angular.element("<entity-admin-menu entity-name-pluralized=\"Roles\" entity-name=\"Role\"></entity-admin-menu>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
describe("ServerProcessMenu Tests", function () {

    var element = null;
    var scope = null;
    var rootScope = null;

    beforeEach(function () {
        module("serverProcess");
    });

    beforeEach(inject(function ($rootScope, $compile, $templateCache, getStringFromUrl) {
        $templateCache.put("/app/serverProcess/components/serverProcessMenu/serverProcessMenu.html", getStringFromUrl("/app/serverProcess/components/serverProcessMenu/serverProcessMenu.html"));
        element = angular.element("<server-process-menu></server-process-menu>");
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should be defined", function () {
        expect(element).toBeDefined();
    });

});
"use strict";

describe("Preferences Controller", function () {

    var controller = null;
    var mockScope = null;
    var deferred = null;
    var spyPromise = null;
    var mockDataService = null;

    beforeEach(function () {
        angular.mock.module("user");
    });

    beforeEach(angular.mock.inject(function ($rootScope, $controller, $q) {
        mockScope = $rootScope.$new();
        deferred = $q.defer();
        spyPromise = deferred.promise;
        mockDataService = jasmine.createSpyObj('dataService', ['updateClientPreferences']);
        mockDataService.updateClientPreferences.andReturn(spyPromise);

        controller = $controller("preferencesController", {
            $scope: mockScope,
            dataService: mockDataService,
            preferencesData: {
                "Server":
                    { "RecentPoLimit": 5 },
                "Client":
                {
                    "PlaceCallUse": "Skype",
                    "StartScreen": "Dashboard",
                    "PoDisplayLimit": "15",
                    "PoOrderBy": "Due Date",
                    "PoOrder": "Descending",
                    "RecentPoLimit": "5"
                }
            }
        });
    }));

    //it("should set default values", function () {
    //    expect(controller.startScreen).toBe("Dashboard");
    //    expect(controller.poDisplayLimit).toBe("15");
    //});

    //it("should update values", function () {

    //    var clientPreferences = {
    //        "startScreen": "Approvals Needed",
    //        "poDisplayLimit": "5"
    //    };
    //    controller.update(clientPreferences);
    //    expect(controller.startScreen).toBe("Approvals Needed");
    //    expect(controller.poDisplayLimit).toBe("5");
    //    expect(mockDataService.updateClientPreferences.wasCalled).toBe(true);
    //});
});
