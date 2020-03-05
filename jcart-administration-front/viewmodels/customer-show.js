var app = new Vue({
    el: '#app',
    data: {
        customerId: '',
        username: '',
        realName: '',
        avatarUrl: '',
        mobile: '',
        email: '',
        status: '',
        createTimestamp: '',
        newsSubscribed: '',
        rewordPoints: '',
        defaultAddressId: '',
        defaultAddress: ''
    },
    mounted() {
        console.log('view mounted');

        var url = new URL(location.href);
        this.customerId = url.searchParams.get("customerId");
        if (!this.customerId) {
            alert('customerId is null');
            return;
        }

        this.getCustomerById();
    },
    methods: {
        getCustomerById() {
            axios.get('/customer/getById', {
                params: {
                    customerId: this.customerId
                }
            })
                .then(function (response) {
                    console.log(response);
                    var customer = response.data;
                    app.username = customer.username;
                    app.realName = customer.realName;
                    app.avatarUrl = customer.avatarUrl;
                    app.mobile = customer.mobile;
                    app.email = customer.email;
                    app.status = customer.status;
                    app.createTimestamp = customer.createTimestamp;
                    app.newsSubscribed = customer.newsSubscribed;
                    app.rewordPoints = customer.rewordPoints;
                    app.defaultAddressId = customer.defaultAddressId;
                    app.defaultAddress = customer.defaultAddress;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})