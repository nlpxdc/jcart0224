var app = new Vue({
    el: '#app',
    data: {
        selectMainPage: '',
        subMenus: [
            {
                name: "商品管理",
                index: "1",
                icon: "el-icon-goods",
                menuItems: [
                    { name: "商品列表", index: "1-1" }
                ]
            },
            {
                name: "客户管理",
                index: "2",
                icon: "el-icon-s-custom",
                menuItems: [
                    { name: "客户列表", index: "2-2" }
                ]
            },
            {
                name: "订单管理",
                index: "3",
                icon: "el-icon-s-order",
                menuItems: [
                    { name: "订单列表", index: "3-3" },
                    { name: "退货列表", index: "3-4" }
                ]
            },
            {
                name: "用户管理",
                index: "4",
                icon: "el-icon-user",
                menuItems: [
                    { name: "用户列表", index: "4-5" }
                ]
            }
        ]
    },
    methods: {
        handleMenuItemSelect(index, indexPath) {
            console.log('menu item selected', index, indexPath);
            this.selectMainPage = index;
        }
    }
})