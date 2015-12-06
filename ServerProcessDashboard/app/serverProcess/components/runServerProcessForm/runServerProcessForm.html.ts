angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/components/runServerProcessForm/runServerProcessForm.html",
		"<div id=\"run-server-process\">"+
		""+
		"    <form name=\"runServerProcessForm\" id=\"run-server-process-form\" data-ng-submit=\"tryToRun(runServerProcessForm)\" novalidate>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Name"+
		"            </label>"+
		"            <input data-ng-model=\"entity.name\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <div class=\"form-group\">"+
		"            <label>"+
		"                Step"+
		"            </label>"+
		"            <input data-ng-model=\"entity.step\" type=\"text\" class=\"form-control\" />"+
		"        </div>"+
		""+
		"        <p>"+
		"            <input type=\"submit\" value=\"run\" class=\"btn btn-lg\" />"+
		"        </p>"+
		"    </form>"+
		""+
		"</div>"
	);
}]);
