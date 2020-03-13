const AddressIndexRoutePage = {
    template: `
    <div id="app">
        <el-page-header @back="handleGoBack" content="地址列表">
        </el-page-header>
        <el-table :data="addresses" style="width: 100%">
            <el-table-column prop="tag" label="标签">
            </el-table-column>
            <el-table-column prop="content" label="内容">
            </el-table-column>
            <el-table-column prop="receiverName" label="收货人姓名">
            </el-table-column>
            <el-table-column prop="receiverMobile" label="收货人手机">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="handleShowClick(scope.$index, scope.row)">详情
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    `,
    data() {
        return {
            customerId: '',
            addresses: []
        }
    },
    mounted() {
        console.log('view mounted');

        this.customerId = this.$route.params.customerId;
        if (!this.customerId) {
            alert('customerId is null');
            return;
        }

        this.getAddressByCustomerId();
    },
    methods: {
        handleGoBack() {
            console.log('go back click');
            this.$router.back();
        },
        handleShowClick(index, row) {
            this.$router.push('/address/show/' + row.addressId);
        },
        getAddressByCustomerId() {
            axios.get('/address/getListByCustomerId', {
                params: {
                    customerId: this.customerId
                }
            })
                .then((response) => {
                    console.log(response);
                    this.addresses = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}