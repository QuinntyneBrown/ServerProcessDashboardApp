angular.module("serverProcess").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/serverProcess/templates/runserverprocess.html",
		"<div>"+
		"    <run-server-process-form></run-server-process-form>"+
		"</div>"
	);
}]);
