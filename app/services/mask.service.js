(function () {
    angular
        .module('app.services')
        .service('serviceMask', serviceMask);

    serviceMask.$inject = ['$state'];

    function serviceMask($state) {
        const vm = this;

        vm.dateDay = dateDay;

        function dateDay(value) {
            let x;

            if(value.includes('/')){
                x = value.replace('/', '');

                if(x.includes('/')){
                    x = x.replace('/', '')
                }
            }else{
                x = value
            }

            let day = x.slice(0,2),
                month = x.slice(2,4),
                year = x.slice(4,8),
                fullDate;

            if(x.length > 8){
                fullDate = `${day}/${month}/${year}`;
            }

            if(x.length <= 2) {
                fullDate = `${day}`;
            }

            if(x.length <= 4 && x.length > 2) {
                fullDate = `${day}/${month}`;
            }

            if(x.length <= 8 && x.length > 4) {
                fullDate = `${day}/${month}/${year}`;
            }

            //console.log(fullDate);
            return fullDate
        }

        return vm;
    };
})();