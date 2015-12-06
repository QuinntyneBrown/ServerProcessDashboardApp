angular.module("dashboard").run(["$templateCache", ($templateCache) => {
	$templateCache.put("/app/dashboard/templates/signin.html",
		"<div>"+
		"    "+
		"    <sign-in-form></sign-in-form>"+
		"</div>"
	);
}]);
