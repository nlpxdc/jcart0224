var app = new Vue({
    el: '#app',
    data: {
        addresses: []
    },
    mounted() {
        console.log('view mounted');
        this.getMyAddresses();
    },
    methods: {
        getMyAddresses() {
            axios.get('/address/getCustomerAddress')
                .then(function (response) {
                    console.log(response);
                    app.addresses = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})