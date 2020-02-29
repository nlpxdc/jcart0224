var app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: ''
    },
    methods: {
        handleLoginClick() {
            console.log('login click');
            this.loginCustomer();
        },
        loginCustomer() {
            axios.get('/customer/login', {
                params: {
                    username: this.username,
                    password: this.password
                }
            })
                .then(function (response) {
                    console.log(response);
                    var dto = response.data;
                    localStorage['jcartToken'] = dto.token;
                    localStorage['expireTimestamp'] = dto.expireTimestamp;
                    console.log(dto);
                    alert('登陆成功');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})