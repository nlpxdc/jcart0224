var app = new Vue({
    el: '#app',
    data: {
        tag: '',
        receiverName: '',
        receiverMobile: '',
        content: ''
    },
    methods: {
        handleCreateClick(){
            console.log('create click');
            this.createAddress();
        },
        createAddress() {
            axios.post('/address/create', {
                tag: this.tag,
                receiverName: this.receiverName,
                receiverMobile: this.receiverMobile,
                content: this.content
            })
                .then(function (response) {
                    console.log(response);
                    alert('创建成功');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})