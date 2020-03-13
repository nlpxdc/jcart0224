const routes = [
    { path: '/administrator/updateprofile', component: AdministratorUpdateProfileRoutePage },
    { path: '/administrator/index', component: AdministratorIndexRoutePage },
    { path: '/administrator/create', component: AdministratorCreateRoutePage },
    { path: '/administrator/update/:administratorId', component: AdministratorUpdateRoutePage },

    { path: '/product/search', component: ProductSearchRoutePage },
    { path: '/product/create', component: ProductCreateRoutePage },
    { path: '/product/update/:productId', component: ProductUpdateRoutePage },

    { path: '/customer/search', component: CustomerSearchRoutePage },
    { path: '/order/search', component: OrderSearchRoutePage },
    { path: '/return/search', component: ReturnSearchRoutePage }

];

const router = new VueRouter({
    routes: routes
});