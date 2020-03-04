var app = new Vue({
    el: '#app',
    data: {
        orderId: '',
        status: '',
        totalPrice: '',
        rewordPoints: '',
        createTimestamp: '',
        updateTimestamp: '',
        shipMethod: '',
        shipAddress: '',
        shipPrice: '',
        payMethod: '',
        invoiceAddress: '',
        invoicePrice: '',
        comment: '',
        orderProducts: [],
        orderHistories: []
    },
    mounted() {
        console.log('view mounted');

        var url = new URL(location.href);
        this.orderId = url.searchParams.get("orderId");
        if (!this.orderId) {
            alert('orderId is null');
            return;
        }

        this.getOrderById();
    },
    methods: {
        getOrderById() {
            axios.get('/order/getById', {
                params: {
                    orderId: this.orderId
                }
            })
                .then(function (response) {
                    console.log(response);
                    var orderDTO = response.data;
                    app.status = orderDTO.status;
                    app.totalPrice = orderDTO.totalPrice;
                    app.rewordPoints = orderDTO.rewordPoints;
                    app.createTimestamp = orderDTO.createTimestamp;
                    app.updateTimestamp = orderDTO.updateTimestamp;
                    app.shipMethod = orderDTO.shipMethod;
                    app.shipAddress = orderDTO.shipAddress;
                    app.shipPrice = orderDTO.shipPrice;
                    app.payMethod = orderDTO.payMethod;
                    app.invoiceAddress = orderDTO.invoiceAddress;
                    app.invoicePrice = orderDTO.invoicePrice;
                    app.comment = orderDTO.comment;
                    app.orderProducts = orderDTO.orderProducts;
                    app.orderHistories = orderDTO.orderHistories;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})