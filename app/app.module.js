(function() {
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
        'app.actionMenu',
        'app.modal',

        //plugins
        'toastr'
    ]);
})();