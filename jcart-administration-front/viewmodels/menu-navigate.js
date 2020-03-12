var app = new Vue({
    el: '#app',
    data: {
        selectMainPage: ''
    },
    methods: {
        handleMenuItemClick(val){
            console.log('menu item click', val.index);
            this.selectMainPage = val.index;
        }
    }
})