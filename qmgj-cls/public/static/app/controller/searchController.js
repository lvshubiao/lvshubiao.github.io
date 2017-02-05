app.controller('searchController', ['$scope', '$http', '$state',mySearchController]);
app2.controller('searchController', ['$scope', '$http', '$state',mySearchController]);

function mySearchController($scope, $http, $state) {
	$scope.myKeyUp = function(e){
		if (e.keyCode == 13) {
			var inputVal = angular.element(e.target).val();
			$state.go('list2',{keyword:inputVal})
		}
	}
}
