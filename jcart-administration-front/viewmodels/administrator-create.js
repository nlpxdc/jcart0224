var app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: '',
        realName: '',
        email: '',
        avatarUrl: '',
        selectedStatus: 1,
        statuses: [
            { value: 0, label: '禁用' },
            { value: 1, label: '启用' }
        ],
    },
    methods: {
        handleCreateClick(){
            console.log('create click');
            this.createAdministrator();
        },
        createAdministrator() {
            axios.post('/administrator/create', {
                username: this.username,
                password: this.password,
                realName: this.realName,
                email: this.email,
                avatarUrl: this.avatarUrl,
                status: this.selectedStatus
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