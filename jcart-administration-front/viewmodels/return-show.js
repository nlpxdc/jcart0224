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
        updateTimestamp: '',
        statuses: [
            { value: 0, label: '待处理' },
            { value: 1, label: '待取货' },
            { value: 2, label: '正在处理' },
            { value: 3, label: '完成' },
            { value: 4, label: '拒绝' }
        ],
        actions: [
            { value: 0, label: '退货' },
            { value: 1, label: '换货' },
            { value: 2, label: '修理' }
        ],
        reasons: [
            { value: 0, label: '发货过期' },
            { value: 1, label: '订单错误' },
            { value: 2, label: '收到错误商品' },
            { value: 3, label: '质量问题' }
        ],
        selectedAction: ''
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
        handleUpdateAction() {
            console.log('update action click');
            this.updateReturnAction();
        },
        updateReturnAction() {
            axios.post('/return/updateAction', {
                returnId: this.returnId,
                action: this.selectedAction
            })
                .then(function (response) {
                    console.log(response);
                    alert('处理方式更新成功');
                    app.getReturnById();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
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
                    app.selectedAction = aReturn.action;
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