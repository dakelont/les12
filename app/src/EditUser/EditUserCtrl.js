'use strict'

userApp.controller('EditUserCtrl', function ($scope, $routeParams, UsersService) {
  $scope.userLoaded = false


  UsersService.getUser($routeParams['userId']).then(function (response) {
    $scope.user = response.data
    $scope.userLoaded = true
 
  })
  $scope.editUser = function (userId) {
    $scope.editError = false
    $scope.editSuccess = false
    
    UsersService.editUser(userId).then(function successCallback (response) {

      // Окей!
      $scope.editSuccess = true
    }, function errorCallback (response) {

      // Не окей..
      $scope.editUserError = true
    })
  }
})
