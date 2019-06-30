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
                currentYear = new Date().getFullYear(),
                dataValidation = { fullDate: "", error: 0};

            if(Number(x.slice(0,1)) > 3 || Number(day) > 31){
                dataValidation.error = 1;
            }

            if(Number(month) > 12){
                dataValidation.error = 2;
            }

            console.log(year !== "");
            console.log(year.length < 3);

            if(year !== "" && year.length > 3){
                if(Number(year) < currentYear || Number(year) > currentYear+10) {
                    dataValidation.error = 3;
                }
            }

            if(x.length > 8){
                dataValidation.fullDate = `${day}/${month}/${year}`;
            }

            if(dataValidation.error !== 1 && x.length <= 2) {
                dataValidation.fullDate = `${day}`;
            }

            if(dataValidation.error !== 2 && x.length <= 4 && x.length > 2) {
                dataValidation.fullDate = `${day}/${month}`;
            }

            if(dataValidation.error !== 3 && x.length <= 8 && x.length > 4) {
                dataValidation.fullDate = `${day}/${month}/${year}`;
            }

            //console.log(fullDate);
            return dataValidation
        }

        return vm;
    };
})();