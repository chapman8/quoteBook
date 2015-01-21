var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {
	$scope.getData = function () {
		$scope.data = dataService.getData();
	}

	$scope.getData();

	$scope.addData = function () {
		dataService.addData($scope.quoteAdd.text, $scope.quoteAdd.author);
		$scope.quoteAdd.text = '';
		$scope.quoteAdd.author = '';
	}

	$scope.removeData = function (datum) {
		dataService.removeData(datum.text);
		//Alternate method for removal //dataService.removeData($scope.remove.text);
	}

})