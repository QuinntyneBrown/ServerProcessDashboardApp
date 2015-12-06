module ServerProcessModule {

    "use strict";

    export class RunningServerProcessService implements IRunningServerProcessService {

        public static serviceId: string = "runningServerProcessService";

        public static $inject = ["$http", "$q", "$rootScope", "configurationService"];

        constructor(private $http, private $q: ng.IQService, private $rootScope: ICoreRootScope, private configurationService: any) {
            this.$rootScope.$on("$locationChangeStart",() => {
                this.clearDataStore();
            });
        }

        private dataStore = {
            getAll: null,
            getById: null,
            pages: []
        };

        private clearDataStore = () => {
            this.dataStore = {
                getAll: null,
                getById: null,
                pages: []
            };
        };

        private getBaseUri = () => {
            if (this.$rootScope.configuration && this.$rootScope.configuration.apiVersion) {
                return "api/" + this.$rootScope.configuration.apiVersion + "/runningServerProcess/";
            } else {
                return "api/runningServerProcess/";
            }
        };

        public getAll = () => {

            var deferred = this.$q.defer();

            if (this.dataStore.getAll) {
                deferred.resolve(this.dataStore.getAll);
                return deferred.promise;
            }

            this.$http({ method: "GET", url: this.getBaseUri() + "getAll" }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public getById = (id: string) => {

            var deferred = this.$q.defer();

            if (this.dataStore.getById && this.dataStore.getById.id == id) {
                deferred.resolve(this.dataStore.getById);
                return deferred.promise;
            }

            this.$http({ method: "GET", url: this.getBaseUri() + "getbyid?id=" + id }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public getPage = (offset: number, setSize: number) => {

            var deferred = this.$q.defer();

            if (this.dataStore.getAll) {
                deferred.resolve(this.dataStore.getAll);
                return deferred.promise;
            };

            this.$http({ method: "GET", url: this.getBaseUri() + "getAll" }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public restart = (options) => {

            var deferred = this.$q.defer();

            this.$http({ method: "POST", url: this.getBaseUri() + "restart", data: { guid: options.guid } }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public kill = (options) => {

            var deferred = this.$q.defer();

            this.$http({ method: "POST", url: this.getBaseUri() + "kill", data: { guid: options.guid } }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public pause = (options) => {

            var deferred = this.$q.defer();

            this.$http({ method: "POST", url: this.getBaseUri() + "pause", data: { guid: options.guid } }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public stop = (options) => {

            var deferred = this.$q.defer();

            this.$http({ method: "POST", url: this.getBaseUri() + "stop", data: { guid: options.guid } }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }


    angular.module("serverProcess").service(RunningServerProcessService.serviceId,($http: ng.IHttpService, $q: ng.IQService, $rootScope: ICoreRootScope, configurationService: any) => new RunningServerProcessService($http, $q, $rootScope, configurationService));


}




