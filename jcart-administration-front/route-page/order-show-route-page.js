const OrderShowRoutePage = {
    template: `
    <div id="app">
        <el-page-header @back="handleGoBack" content="订单详情">
        </el-page-header>
        订单Id：{{orderId}} <br>
        客户姓名：{{customerName}} <br>
        订单状态：{{orderStatuses[status].label}} <br>
        总价：{{totalPrice}} <br>
        积分：{{rewordPoints}} <br>
        下单时间：{{(new Date(createTimestamp)).toLocaleString()}} <br>
        更新时间：{{(new Date(updateTimestamp)).toLocaleString()}} <br>
        寄送方式：{{shipMethods[shipMethod].label}} <br>
        寄送地址：{{shipAddress}} <br>
        邮费：{{shipPrice}} <br>
        支付方式：{{payMethods[payMethod].label}} <br>
        发票地址：{{invoiceAddress}} <br>
        发票金额：{{invoicePrice}} <br>
        备注：{{comment}} <br>
        <br>

        <el-table :data="orderProducts" style="width: 100%">
            <el-table-column prop="productCode" label="商品代码">
            </el-table-column>
            <el-table-column prop="productName" label="商品名称">
            </el-table-column>
            <el-table-column prop="unitPrice" label="单价">
                <template slot-scope="scope">
                    {{scope.row.unitPrice.toFixed(2)}}
                </template>
            </el-table-column>
            <el-table-column prop="quantity" label="数量">
            </el-table-column>
            <el-table-column prop="totalPrice" label="总计">
            </el-table-column>
        </el-table>
        <br>
        总价：{{totalPrice}}<br>
        运费：{{shipPrice}}<br>
        支付价：{{totalPrice + shipPrice}}<br>
        <br>

        <el-divider>订单历史</el-divider>

        <el-table :data="orderHistories" style="width: 100%">
            <el-table-column prop="timestamp" label="时间">
                <template slot-scope="scope">
                    {{(new Date(scope.row.timestamp)).toLocaleString()}}
                </template>
            </el-table-column>
            <el-table-column prop="comment" label="备注">
            </el-table-column>
            <el-table-column prop="orderStatus" label="订单状态">
                <template slot-scope="scope">
                    {{orderStatuses[scope.row.orderStatus].label}}
                </template>
            </el-table-column>
            <el-table-column label="通知客户">
                <template slot-scope="scope">
                    <span v-if="scope.row.customerNotified">是</span><span v-else>否</span> <br>
                </template>
            </el-table-column>
        </el-table>
        <br>
        <br>

        添加订单历史<br><br>
        <el-select v-model="createHistoryOrderStatus" placeholder="请选择订单状态">
            <el-option v-for="item in orderStatuses" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
        <br>
        <br>

        <el-checkbox v-model="createHistoryCustomerNotified">通知客户</el-checkbox>
        <br>
        <br>

        <el-input v-model="createHistoryComment" type="textarea" placeholder="请输入备注"></el-input>
        <br>
        <br>

        <el-button type="primary" @click="handleCreateOrderHistoryClick">添加订单历史</el-button>


    </div>
    `,
    data() {
        return {
            orderId: '',
            customerId: '',
            customerName: '',
            status: '',
            totalPrice: '',
            rewordPoints: '',
            createTimestamp: '',
            updateTimestamp: '',
            shipMethod: '',
            shipAddress: '',
            shipPrice: '',
            payMethod: '',
            invoiceAddress: '',
            invoicePrice: '',
            comment: '',
            orderProducts: [],
            orderHistories: [],
            orderStatuses: [
                { value: 0, label: '待处理' },
                { value: 1, label: '处理中' },
                { value: 2, label: '待发货' },
                { value: 3, label: '已发货' },
                { value: 4, label: '待签收' },
                { value: 5, label: '已签收' },
                { value: 6, label: '待支付' },
                { value: 7, label: '已支付' },
                { value: 8, label: '取消' },
                { value: 9, label: '拒绝' },
                { value: 10, label: '完成' },
                { value: 11, label: '待评价' },
                { value: 12, label: '已评价' }
            ],
            shipMethods: [
                { value: 0, label: 'EMS' },
                { value: 1, label: '顺丰' },
                { value: 2, label: '圆通' },
                { value: 3, label: '中通' },
                { value: 4, label: '申通' }
            ],
            payMethods: [
                { value: 0, label: '货到付款' },
                { value: 1, label: '借记卡' },
                { value: 2, label: '信用卡' },
                { value: 3, label: '微信支付' },
                { value: 4, label: '支付宝' }
            ],
            createHistoryOrderStatus: '',
            createHistoryCustomerNotified: false,
            createHistoryComment: ''
        }
    },
    mounted() {
        console.log('view mounted');

        this.orderId = this.$route.params.orderId;
        if (!this.orderId) {
            alert('orderId is null');
            return;
        }

        this.getOrderById();
        this.getHistoryByOrderId();
    },
    methods: {
        handleGoBack() {
            console.log('go back click');
            this.$router.back();
        },
        handleCreateOrderHistoryClick() {
            console.log('create order history click');
            this.createOrderHistory();
        },
        getOrderById() {
            axios.get('/order/getById', {
                params: {
                    orderId: this.orderId
                }
            })
                .then( (response) => {
                    console.log(response);
                    var order = response.data;
                    this.customerId = order.customerId;
                    this.customerName = order.customerName;
                    this.status = order.status;
                    this.totalPrice = order.totalPrice;
                    this.rewordPoints = order.rewordPoints;
                    this.createTimestamp = order.createTimestamp;
                    this.updateTimestamp = order.updateTimestamp;
                    this.shipMethod = order.shipMethod;
                    this.shipAddress = order.shipAddress;
                    this.shipPrice = order.shipPrice;
                    this.payMethod = order.payMethod;
                    this.invoiceAddress = order.invoiceAddress;
                    this.invoicePrice = order.invoicePrice;
                    this.comment = order.comment;
                    this.orderProducts = order.orderProducts;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getHistoryByOrderId() {
            axios.get('/orderhistory/getListByOrderId', {
                params: {
                    orderId: this.orderId
                }
            })
                .then( (response) => {
                    console.log(response);
                    this.orderHistories = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        createOrderHistory() {
            axios.post('/orderhistory/create', {
                orderId: this.orderId,
                orderStatus: this.createHistoryOrderStatus,
                comment: this.createHistoryComment,
                customerNotified: this.createHistoryCustomerNotified
            })
                .then( (response) => {
                    console.log(response);
                    alert('订单历史添加成功');
                    this.createHistoryOrderStatus = '';
                    this.createHistoryCustomerNotified = false;
                    this.createHistoryComment = '';
                    this.getOrderById();
                    this.getHistoryByOrderId();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}