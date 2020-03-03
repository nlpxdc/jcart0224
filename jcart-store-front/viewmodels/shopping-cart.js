var app = new Vue({
    el: '#app',
    data: {
        myShoppingCart: []
    },
    mounted() {
        console.log('view mounted');
        var myShoppingCartJson = localStorage['myShoppingCartJson'];
        this.myShoppingCart = JSON.parse(myShoppingCartJson);
        
    }
})