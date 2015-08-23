//angular.module('starter.controllers', [])

mobileApp.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

mobileApp.controller('HomeCtrl', function($scope,appService,$ionicSlideBoxDelegate) {
  $scope.serviceApi		= serviceApi;
  $scope.GetServiceApi	= GetServiceApi;

  setTimeout(function(){
      $ionicSlideBoxDelegate.update();
  },1000);

  appService.HttpRequest('GET',GetServiceApi+'service/get_promo?token='+token).success(function(data) {
    $scope.requestPromo = data;
  });

  appService.HttpRequest('GET',GetServiceApi+'service/get_category?token='+token).success(function(data) {
		$scope.requestCategory = data;
    });
})


mobileApp.controller('MenuCtrl', function($scope, $rootScope,appService,$state, $stateParams) {
  $scope.serviceApi		= serviceApi;
  $scope.GetServiceApi	= GetServiceApi;

  $rootScope.itemcategory = $stateParams.category;

  console.log('category:' + $stateParams.category);
  console.log('title:' + $stateParams.title);
  var requestParams = {
        "token": token,
        "category": $rootScope.itemcategory
    };

  appService.HttpRequest('POST',GetServiceApi+'service/get_menu/', requestParams).success(function(data) {
    $scope.requestData = data;
    });
})

mobileApp.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

mobileApp.controller('PlaylistCtrl', function($scope, $stateParams) {
});
