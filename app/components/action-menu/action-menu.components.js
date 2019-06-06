(function(){
    'use strict';

    angular
        .module('app.actionMenu')
        .controller('ActionMenuController', ActionMenuController);

    ActionMenuController.$inject = ['$state'];

    /* @ngInject */

    function ActionMenuController($state){
        const vm = this;
    }
})();