var ServerProcessModule;
(function (ServerProcessModule) {
    var ExecutionState;
    (function (ExecutionState) {
        ExecutionState[ExecutionState["created"] = 0] = "created";
        ExecutionState[ExecutionState["inProgress"] = 1] = "inProgress";
        ExecutionState[ExecutionState["stopped"] = 2] = "stopped";
        ExecutionState[ExecutionState["paused"] = 3] = "paused";
        ExecutionState[ExecutionState["killed"] = 4] = "killed";
    })(ExecutionState || (ExecutionState = {}));
    angular.module("serverProcess").value("executionState", ExecutionState);
})(ServerProcessModule || (ServerProcessModule = {}));
//# sourceMappingURL=executionState.js.map