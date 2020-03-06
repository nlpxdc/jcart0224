var app = new Vue({
    el: '#app',
    data: {
        returnId: '',
        orderId: '',
        orderTimestamp: '',
        customerId: '',
        customerName: '',
        mobile: '',
        email: '',
        status: '',
        action: '',
        productCode: '',
        productName: '',
        quantity: '',
        reason: '',
        opened: '',
        comment: '',
        createTimestamp: '',
        updateTimestamp: ''
    },
    mounted() {
        console.log('view mounted');

        var url = new URL(location.href);
        this.returnId = url.searchParams.get("returnId");
        if (!this.returnId) {
            alert('returnId is null');
            return;
        }

        this.getReturnById();
    },
    methods: {
        getReturnById() {
            axios.get('/return/getById', {
                params: {
                    returnId: this.returnId
                }
            })
                .then(function (response) {
                    console.log(response);
                    var aReturn = response.data;
                    app.orderId = aReturn.orderId;
                    app.orderTimestamp = aReturn.orderTimestamp;
                    app.customerId = aReturn.customerId;
                    app.customerName = aReturn.customerName;
                    app.mobile = aReturn.mobile;
                    app.email = aReturn.email;
                    app.status = aReturn.status;
                    app.action = aReturn.action;
                    app.productCode = aReturn.productCode;
                    app.productName = aReturn.productName;
                    app.quantity = aReturn.quantity;
                    app.reason = aReturn.reason;
                    app.opened = aReturn.opened;
                    app.comment = aReturn.comment;
                    app.createTimestamp = aReturn.createTimestamp;
                    app.updateTimestamp = aReturn.updateTimestamp;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})