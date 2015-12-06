angular.module("dashboard").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/dashboard/components/feedReport/feedReport.html", "<div id=\"feed-report\">" + "    <h1>Feed Report</h1>" + "    " + "    <div data-ng-repeat=\"runningJob in runningJobs\">" + "        <a> {{ runningJob.name }}</a>" + "    </div>" + "</div>");
}]);
//# sourceMappingURL=feedReport.html.js.map