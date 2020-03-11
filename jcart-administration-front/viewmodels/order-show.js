var app = new Vue({
    el: '#app',
    data: {
        orderId: '',
        customerId: '',
        customerName: '',
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
        orderHistories: [],
        orderStatuses: [
            { value: 0, label: '待处理' },
            { value: 1, label: '处理中' },
            { value: 2, label: '待发货' },
            { value: 3, label: '已发货' },
            { value: 4, label: '待签收' },
            { value: 5, label: '已签收' },
            { value: 6, label: '待支付' },
            { value: 7, label: '已支付' },
            { value: 8, label: '取消' },
            { value: 9, label: '拒绝' },
            { value: 10, label: '完成' },
            { value: 11, label: '待评价' },
            { value: 12, label: '已评价' }
        ],
        shipMethods: [
            { value: 0, label: 'EMS' },
            { value: 1, label: '顺丰' },
            { value: 2, label: '圆通' },
            { value: 3, label: '中通' },
            { value: 4, label: '申通' }
        ],
        payMethods: [
            { value: 0, label: '货到付款' },
            { value: 1, label: '借记卡' },
            { value: 2, label: '信用卡' },
            { value: 3, label: '微信支付' },
            { value: 4, label: '支付宝' }
        ],
        createHistoryOrderStatus: '',
        createHistoryCustomerNotified: false,
        createHistoryComment: ''

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
        this.getHistoryByOrderId();
    },
    methods: {
        handleCreateOrderHistoryClick() {
            console.log('create order history click');
            this.createOrderHistory();
        },
        getOrderById() {
            axios.get('/order/getById', {
                params: {
                    orderId: this.orderId
                }
            })
                .then(function (response) {
                    console.log(response);
                    var order = response.data;
                    app.customerId = order.customerId;
                    app.customerName = order.customerName;
                    app.status = order.status;
                    app.totalPrice = order.totalPrice;
                    app.rewordPoints = order.rewordPoints;
                    app.createTimestamp = order.createTimestamp;
                    app.updateTimestamp = order.updateTimestamp;
                    app.shipMethod = order.shipMethod;
                    app.shipAddress = order.shipAddress;
                    app.shipPrice = order.shipPrice;
                    app.payMethod = order.payMethod;
                    app.invoiceAddress = order.invoiceAddress;
                    app.invoicePrice = order.invoicePrice;
                    app.comment = order.comment;
                    app.orderProducts = order.orderProducts;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getHistoryByOrderId() {
            axios.get('/orderhistory/getListByOrderId', {
                params: {
                    orderId: this.orderId
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.orderHistories = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        createOrderHistory() {
            axios.post('/orderhistory/create', {
                orderId: this.orderId,
                orderStatus: this.createHistoryOrderStatus,
                comment: this.createHistoryComment,
                customerNotified: this.createHistoryCustomerNotified
            })
                .then(function (response) {
                    console.log(response);
                    alert('订单历史添加成功');
                    app.createHistoryOrderStatus = '';
                    app.createHistoryCustomerNotified = false;
                    app.createHistoryComment = '';
                    app.getOrderById();
                    app.getHistoryByOrderId();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})
