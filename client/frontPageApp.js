var frontPageApp = angular.module('frontPage', []);

.controller("frontPageController", function($scope){

	

});


// Firebase is dependency in this module
// Allows access to $firebase service from your controllers, factories, and services.

var myApp = angular.module('frontPageApp', ['firebase']);

.controller('frontPageController', ['$scope', '$firebase', function(){
	function($scope, $firebase) {
		var ref = new Firebase('https://rkl88y2k0cy.firebaseio-demo.com/');
		$scope.messages = $firebase(ref).$asArray();
	}
}])