module ServerProcessModule {

    "use strict";

    export class ServerProcessService implements IServerProcessService {

        public static serviceId: string = "serverProcessService";

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
                return "api/" + this.$rootScope.configuration.apiVersion + "/serverProcess/";
            } else {
                return "api/serverProcess/";
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

        public add = (options) => {

            var deferred = this.$q.defer();

            this.$http({ method: "POST", url: this.getBaseUri() + "add", data: options.entity }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public run = (options) => {

            var deferred = this.$q.defer();

            this.$http({ method: "POST", url: this.getBaseUri() + "run", data: { name: options.name, step: options.step } }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public remove = (options) => {

            var deferred = this.$q.defer();

            this.$http({ method: "POST", url: this.getBaseUri() + "remove", data: options.serverProcessId }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }

    angular.module("serverProcess").service(ServerProcessService.serviceId,($http: ng.IHttpService, $q: ng.IQService, $rootScope: ICoreRootScope, configurationService: any) => new ServerProcessService($http, $q, $rootScope, configurationService));


}




