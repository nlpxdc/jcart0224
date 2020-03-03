var app = new Vue({
    el: '#app',
    data: {
        myShoppingCart: []
    },
    mounted() {
        console.log('view mounted');
        var myShoppingCartJson = localStorage['myShoppingCartJson'];
        this.myShoppingCart = JSON.parse(myShoppingCartJson);

    },
    methods: {
        handleDelete(index, row) {
            console.log('delete click');
            this.myShoppingCart.splice(index, 1);
            localStorage['myShoppingCartJson'] = JSON.stringify(this.myShoppingCart);
        }
    }
})