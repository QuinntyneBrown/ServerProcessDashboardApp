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