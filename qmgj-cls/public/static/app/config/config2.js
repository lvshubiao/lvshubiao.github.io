var app2 = angular.module('qmgj_login', ['ui.router','ui.bootstrap']);
app2.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/vip/main');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'static/app/view/homeView.html',
		controller:'homeController'
	}).state('vip',{
		url:'/vip',
		templateUrl:'static/app/view/vipView.html',
		controller:'vipController'
	}).state('vip.main',{
		url:'/main',
		templateUrl:'static/app/view/vip.mainView.html',
		controller:'vipMainController'
	}).state('vip.info',{
		url:'/info',
		templateUrl:'static/app/view/vip.infoView.html',
		controller:'vipInfoController'
	}).state('vip.record',{
		url:'/record',
		templateUrl:'static/app/view/vip.recordView.html',
		controller:'vipRecordController'
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
app2.filter('substr',function(){
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
app2.filter('getMoon', function() {
    return function(input) {
        var curH = new Date(parseInt(input)).getHours();
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