var app = new Vue({
    el: '#app',
    data: {
        returnId: '',
        returnHistories: [],
        selectedReturnStatus: '',
        returnStatuses: [
            { value: 0, label: '待处理' },
            { value: 1, label: '待取货' },
            { value: 2, label: '正在处理' },
            { value: 3, label: '完成' },
            { value: 4, label: '拒绝' }
        ],
        customerNotified: false,
        comment: ''
    },
    mounted() {
        console.log('view mounted');

        var url = new URL(location.href);
        this.returnId = url.searchParams.get("returnId");
        if (!this.returnId) {
            alert('returnId is null');
            return;
        }

        this.getHistoryByReturnId();
    },
    methods: {
        handleCreateClick() {
            console.log('create click');
            this.createReturnHistory();
        },
        createReturnHistory() {
            axios.post('/returnhistory/create', {
                returnId: this.returnId,
                returnStatus: this.selectedReturnStatus,
                customerNotified: this.customerNotified,
                comment: this.comment,
            })
                .then(function (response) {
                    console.log(response);
                    alert('创建成功');
                    app.selectedReturnStatus = '';
                    app.customerNotified = false;
                    app.comment = '';
                    app.getHistoryByReturnId();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getHistoryByReturnId() {
            axios.get('/returnhistory/getListByReturnId', {
                params: {
                    returnId: this.returnId
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.returnHistories = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})