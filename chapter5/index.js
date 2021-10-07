var app  = new Vue({
    el: '#app',
    data:{
        list:[
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1,
                ischecked: true
            },
            {
                id: 2,
                name: 'ipad Pro',
                price: 5888,
                count: 1,
                ischecked: true
            },
            {
                id: 3,
                name: 'Macbook Pro',
                price: 21488,
                count: 1,
                ischecked: true
            }
        ]
    },
    computed: {
        totalPrice: function() {
            var total = 0;
            for(var i = 0;i<this.list.length;i++){
                var item = this.list[i];
                if(item.ischecked === true){
                    total += item.price * item.count;
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }

    },
    methods: {
        handleReduce: function(index) {
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function(index) {
            this.list[index].count++;
        },
        handleRemove: function(index){
            this.list.splice(index, 1);
        },


        handleRemoveAllChecked: function(){
            
            for(var i = 0;i<this.list.length;i++){
                var item = {
                    id: this.list[i].id,
                    name: this.list[i].name,
                    price: this.list[i].price,
                    count: this.list[i].count,
                    ischecked: false
                };
                this.list.splice(i, 1, item);
            }
        },
        handleAddAllChecked: function(){
            for(var i = 0;i<this.list.length;i++){
                var item = {
                    id: this.list[i].id,
                    name: this.list[i].name,
                    price: this.list[i].price,
                    count: this.list[i].count,
                    ischecked: true
                };
                this.list.splice(i, 1, item);
            }
        },
        handleAddChecked: function(index){
            var item = {
                id: this.list[index].id,
                name: this.list[index].name,
                price: this.list[index].price,
                count: this.list[index].count,
                ischecked: true
            };
            this.list.splice(index, 1, item);
        },
        handleRemoveChecked: function(index){
            var item = {
                id: this.list[index].id,
                name: this.list[index].name,
                price: this.list[index].price,
                count: this.list[index].count,
                ischecked: false
            };
            this.list.splice(index, 1, item);
        }

    }

});