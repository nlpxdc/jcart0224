var app = new Vue({
    el: '#app',
    data: {
        email: '',
        loading: false
    },
    methods: {
        handleFindBackPwdClick() {
            console.log('find back pwd click');
            this.loading = true;
            this.getPwdResetCode();
        },
        getPwdResetCode() {
            axios.get('/administrator/getPwdResetCode', {
                params: {
                    email: this.email
                }
            })
                .then(function (response) {
                    console.log(response);
                    app.loading = false;
                    alert('重置码已发送到邮箱');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})