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
