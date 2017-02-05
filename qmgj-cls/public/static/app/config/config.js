var app = angular.module('qmgj_unlogin', ['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'static/app/view/homeView.html',
		controller:'homeController'
	}).state('reg',{
		url:'/reg',
		templateUrl:'static/app/view/regView.html',
		controller:'regController'
	}).state('login',{
		url:'/login',
		templateUrl:'static/app/view/loginView.html',
		controller:'loginController'
	}).state('list',{
		url:'/list',
		templateUrl:'static/app/view/listView.html',
		controller:'listController'
	}).state('list2',{
		url:'/list/:keyword',
		templateUrl:'static/app/view/listView.html',
		controller:'listController'
	})
}])
app.filter('substr',function(){
	return function(){
		var val = arguments[0],
			start = arguments[1],
			count = arguments[2];
		if (start == undefined) {
			start = 0;
			count = val.length;
		}
		if (count == undefined) {
			start = 0;
			count = arguments[1]
		}
		return val.substr( start,count );
	}
})
app.filter('getMoon', function() {
    return function(input) {
        var curH = new Date(parseInt(input)).getHours();
        // var val = input/1000/60/60;
        var moon = '';
        if (curH > 6 && curH < 12) {
            moon = '上午好';

        } else if (curH >= 12 && curH < 14) {
            moon = '中午好';
        } else if (curH >= 14 && curH < 18) {
            moon = '下午好';
        } else if (curH > 18 && curH < 24) {
            moon = '晚上好';
        } else {
            moon = '凌晨好';
        }
        return moon;
    }

});
