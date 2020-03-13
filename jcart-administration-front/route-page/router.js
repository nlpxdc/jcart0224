const routes = [
    { path: '/product/search', component: ProductSearchRoutePage },
    { path: '/product/update/:productId', component: ProductUpdateRoutePage },

    { path: '/customer/search', component: CustomerSearchRoutePage },
    { path: '/order/search', component: OrderSearchRoutePage },
    { path: '/return/search', component: ReturnSearchRoutePage },
    { path: '/administrator/index', component: AdministratorIndexRoutePage },
    { path: '/administrator/updateprofile', component: AdministratorUpdateProfileRoutePage }
    
];

const router = new VueRouter({
    routes: routes
});