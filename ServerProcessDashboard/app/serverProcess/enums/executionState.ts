module ServerProcessModule {
    
    enum ExecutionState {
        created,
        inProgress,
        stopped,
        paused,
        killed
    }

    angular.module("serverProcess").value("executionState", ExecutionState);
} 