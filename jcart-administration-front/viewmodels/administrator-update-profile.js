var app = new Vue({
    el: '#app',
    data: {
        administratorId: '',
        username: '',
        realName: '',
        email: '',
        avatarUrl: '',
        createTimestamp: ''
    },
    mounted() {
        console.log('view mounted');
        this.getMyProfile();
    },
    methods: {
        handleUpdateClick() {
            console.log('update click');
            this.updateMyProfile();
        },
        getMyProfile() {
            axios.get('/administrator/getProfile')
                .then(function (response) {
                    console.log(response);
                    var me = response.data;
                    app.administratorId = me.administratorId;
                    app.username = me.username;
                    app.realName = me.realName;
                    app.email = me.email;
                    app.avatarUrl = me.avatarUrl;
                    app.createTimestamp = me.createTimestamp;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        updateMyProfile() {
            axios.post('/administrator/updateProfile', {
                realName: this.realName,
                email: this.email,
                avatarUrl: this.avatarUrl,

            })
                .then(function (response) {
                    console.log(response);
                    alert('更新成功');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})