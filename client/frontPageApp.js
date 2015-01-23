// create angular app
var validationApp = angular.module('frontPageApp', []);

// create angular controller
validationApp.controller('frontPageController', function($scope) {
	
	$scope.showPurchaseTitle = true;
	$scope.showConfirmationTitle = false;

	$scope.user = {
		
	}
	//$scope.formContainer;
	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		// if (isValid) { 
		// 	alert('our form is amazing');
		// }

		


	};

	$scope.updateConfirmation = function() {

		//var $update = '<div class="updateMessage">' + Please wait while we update the 

		if (username && bitcoinId) {
			$scope.showPurchaseTitle = false;
			$scope.showConfirmationTitle = true;
		} else {
			$scope.showPurchaseTitle = true;
		}

		//console.log($scope.formContainer);
		//$scope.formContainer = d;

		//console.log($scope.formContainer);

	}

});