(function() {
    console.log('module working');
    angular.module('app', [
        'ui.router',
        'app.services',

        //NewModule
        'app.dashboard',

        'app.register',
        'app.forgotPassword',
        'app.login',

        //Components
        'app.navbarModal',
        'app.navbar',
        'app.actionMenu'
    ]);
})();