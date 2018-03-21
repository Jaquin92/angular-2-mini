angular.module('myApp').service('productsSrvc', function ($http) {
    this.getProduct = function (prod) {
        return $http.get('https://practiceapi.devmountain.com/products?category=' + prod).then(resp => {
            console.log(resp.data)
            return resp.data
        })
    }
});
