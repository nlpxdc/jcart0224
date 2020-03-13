const AdministratorUpdateRoutePage = {
    template: `
    <div id="app">
        <el-page-header @back="handleGoBack" content="更新管理员">
        </el-page-header>
        <el-input v-model="username" placeholder="请输入用户名" readonly></el-input>
        <el-input v-model="realName" placeholder="请输入姓名"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <el-input v-model="email" placeholder="请输入邮箱"></el-input>
        <el-input v-model="avatarUrl" placeholder="请输入头像"></el-input>


        <el-select v-model="selectedStatus" placeholder="请选择状态">
            <el-option v-for="item in statuses" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <br>

        <el-button type="primary" @click="handleUpdateClick">更新</el-button>
    </div>
    `,
    data() {
        return {
            administratorId: '',
            username: '',
            realName: '',
            password: '',
            email: '',
            avatarUrl: '',
            selectedStatus: '',
            statuses: [
                { value: 0, label: '禁用' },
                { value: 1, label: '启用' }
            ]
        }
    },
    mounted() {
        console.log('view mounted');

        this.administratorId = this.$route.params.administratorId;
        if (!this.administratorId) {
            alert('administratorId is null');
            return;
        }

        this.getAdministratorById();
    },
    methods: {
        handleGoBack() {
            console.log('go back click');
            this.$router.back();
        },
        handleUpdateClick() {
            console.log('update click');
            this.updateAdministrator();
        },
        getAdministratorById() {
            axios.get('/administrator/getById', {
                params: {
                    administratorId: this.administratorId
                }
            })
                .then((response) => {
                    console.log(response);
                    var administrator = response.data;
                    this.username = administrator.username;
                    this.realName = administrator.realName;
                    this.email = administrator.email;
                    this.avatarUrl = administrator.avatarUrl;
                    this.selectedStatus = administrator.status;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        updateAdministrator() {
            axios.post('/administrator/update', {
                administratorId: this.administratorId,
                password: this.password,
                realName: this.realName,
                email: this.email,
                avatarUrl: this.avatarUrl,
                status: this.selectedStatus
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