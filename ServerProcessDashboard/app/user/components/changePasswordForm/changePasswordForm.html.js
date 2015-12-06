angular.module("user").run(["$templateCache", function ($templateCache) {
    $templateCache.put("/app/user/components/changePasswordForm/changePasswordForm.html", "<div id=\"change-password\">" + "    " + "    <hgroup>" + "        <h1>Change Password: {{ vm.firstname + ' ' + vm.lastname }}</h1>" + "    </hgroup>" + "" + "    <form name=\"changePasswordForm\" id=\"change-password-form\" data-ng-submit=\"tryToChangePassword(changePasswordForm)\" novalidate>" + "        " + "        <div class=\"form-group\">" + "            <label>" + "                Old Password" + "            </label>" + "            <input data-ng-model=\"vm.oldPassword\" type=\"password\" class=\"form-control\" />" + "        </div>" + "" + "        <div class=\"form-group\">" + "            <label>" + "                New Password" + "            </label>" + "            <input data-ng-model=\"vm.newPassword\" type=\"password\" class=\"form-control\" />" + "        </div>" + "" + "        <div class=\"form-group\">" + "            <label>" + "                Confirm Password" + "            </label>" + "            <input data-ng-model=\"vm.confirmPassword\" type=\"password\" class=\"form-control\" />" + "        </div>" + "" + "        <p>" + "            <input type=\"submit\" value=\"Change Password\" class=\"btn btn-lg\" />" + "        </p>" + "" + "    </form>" + "</div>");
}]);
//# sourceMappingURL=changePasswordForm.html.js.map