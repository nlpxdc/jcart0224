var app = new Vue({
    el: '#app',
    data: {
        pageInfo: '',
        pageNum: 1
    },
    mounted(){
        console.log('view mounted');
        this.getMyOrders();
    },
    methods: {
        handlePageChange(val){
            console.log('page changed', val);
            this.pageNum = val;
            this.getMyOrders();
        },
        getMyOrders() {
            axios.get('/order/getList', {
                params: {
                    pageNum: this.pageNum
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.pageInfo = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})