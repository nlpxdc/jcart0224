var app = new Vue({
    el: '#app',
    data: {
        customerId: '',
        addresses: []
    },
    mounted() {
        console.log('view mounted');

        var url = new URL(location.href);
        this.customerId = url.searchParams.get("customerId");
        if (!this.customerId) {
            alert('customerId is null');
            return;
        }

        this.getAddressByCustomerId();
    },
    methods: {
        getAddressByCustomerId() {
            axios.get('/address/getListByCustomerId', {
                params: {
                    customerId: this.customerId
                }
            })
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