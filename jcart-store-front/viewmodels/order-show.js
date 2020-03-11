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
        orderHistories: [],
        statuses: [
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
        ]
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