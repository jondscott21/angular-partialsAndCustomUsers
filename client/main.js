
let myApp = angular.module('app', ['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/users', {
            templateUrl: 'partials/customizeUsers.html'
        })
        .when('/list', {
            templateUrl: 'partials/userList.html'
        })
        .otherwise({
            redirectTo: '/users'
        })
});
myApp.factory('userFactory', [ function () {
    let factory = {};
    factory.users = [];
    factory.addUser = function (user) {
        factory.users.push(user);
    };
    factory.userDelete = function (user) {
        factory.users.splice(factory.users.indexOf(user), 1);
    };
    factory.showOne = function (user) {
    };
    return factory;
}]);
myApp.controller('CustomizeUsersController', ['userFactory', function (userFactory) {
    this.users = userFactory.users;
    this.user = {};
    this.newUser = function () {
        userFactory.addUser(this.user);
        this.user = null;
    };
    this.deleteUser = function (user) {
        userFactory.userDelete(user);
    }
}]);
myApp.controller('UserListsController', ['userFactory', function (userFactory) {
    this.users = userFactory.users;

}]);