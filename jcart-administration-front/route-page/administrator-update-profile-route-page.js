const AdministratorUpdateProfileRoutePage = {
    template: `
    <div id="app">
        用户名：{{username}} <br>
        姓名：<el-input v-model="realName" placeholder="请输入姓名"></el-input>
        邮箱：<el-input v-model="email" placeholder="请输入邮箱"></el-input>
        头像：<el-input v-model="avatarUrl" placeholder="请输入头像"></el-input>
        创建时间：{{(new Date(createTimestamp)).toLocaleString()}}
        <br>
        <el-button type="primary" @click="handleUpdateClick">更新</el-button>
    </div>
    `,
    data() {
        return {
            administratorId: '',
            username: '',
            realName: '',
            email: '',
            avatarUrl: '',
            createTimestamp: ''
        }
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
                .then((response) => {
                    console.log(response);
                    var me = response.data;
                    this.administratorId = me.administratorId;
                    this.username = me.username;
                    this.realName = me.realName;
                    this.email = me.email;
                    this.avatarUrl = me.avatarUrl;
                    this.createTimestamp = me.createTimestamp;
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
}