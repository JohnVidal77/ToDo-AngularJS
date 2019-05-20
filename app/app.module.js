(function() {
    console.log('module working');
    angular.module('app', [
        'ui.router',
        //NewModule
        'app.login'
    ]);
})();