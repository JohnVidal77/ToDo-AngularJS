(function() {
    console.log('module working');
    angular.module('app', [
        'ui.router',
        //NewModule
        'app.register',

        'app.forgotPassword',
        'app.login'
    ]);
})();