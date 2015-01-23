// create angular app
var validationApp = angular.module('frontPageApp', []);

// create angular controller
validationApp.controller('frontPageController', function($scope) {
	$scope.showPurchaseTitle = true;
	$scope.showConfirmationTitle = false;
	//$scope.formContainer;
	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		// if (isValid) { 
		// 	alert('our form is amazing');
		// }

		// if username isValid && bitcoinId isValid
			// serve up confirmation message


	};

	$scope.updateConfirmation = function() {

		//var $update = '<div class="updateMessage">' + Please wait while we update the 
		$scope.showPurchaseTitle = false;
		$scope.showConfirmationTitle = true;

		//console.log($scope.formContainer);
		//$scope.formContainer = d;

		//console.log($scope.formContainer);

	}

});