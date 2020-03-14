const ReturnHistoryIndexRoutePage = {
    template: `
    <div id="app">
        <el-divider>退货历史信息</el-divider>
        <el-table :data="returnHistories" style="width: 100%">
            <el-table-column prop="timestamp" label="时间">
                <template slot-scope="scope">
                    {{(new Date(scope.row.timestamp)).toLocaleString()}}
                </template>
            </el-table-column>
            <el-table-column prop="returnStatus" label="退货状态">
                <template slot-scope="scope">
                    {{returnStatuses[scope.row.returnStatus].label}}
                </template>
            </el-table-column>
            <el-table-column prop="comment" label="备注">
            </el-table-column>
            <el-table-column label="是否通知客户">
                <template slot-scope="scope">
                    <span v-if="scope.row.customerNotified">是</span><span v-else>否</span>
                </template>
            </el-table-column>
        </el-table>

        <el-divider>添加退货历史</el-divider>

        <el-select v-model="selectedReturnStatus" placeholder="请选择退货状态">
            <el-option v-for="item in returnStatuses" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <br>
        <br>

        <el-checkbox v-model="customerNotified">是否通知客户</el-checkbox>
        <br>
        <br>

        <el-input v-model="comment" type="textarea" placeholder="请输入备注"></el-input>
        <br>

        <el-button type="primary" @click="handleCreateClick">添加退货历史</el-button>
    </div>
    `,
    data() {
        return {
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
        }
    },
    mounted() {
        console.log('view mounted');

        this.returnId = this.$route.params.returnId;
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
                .then((response) => {
                    console.log(response);
                    alert('创建成功');
                    this.selectedReturnStatus = '';
                    this.customerNotified = false;
                    this.comment = '';
                    this.getHistoryByReturnId();
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
                .then((response) => {
                    console.log(response);
                    this.returnHistories = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}