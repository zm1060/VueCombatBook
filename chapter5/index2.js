var app  = new Vue({
    el: '#app',
    data:{
        list:[
            {
                class: "电子产品",
                product:[
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
            {
                class: "生活用品",
                product:[
                    {
                        id: 5,
                        name: 'paper',
                        price: 3,
                        count: 1,
                        ischecked: true
                    }
                ]
            },
            {
                class: "蔬菜",
                product:[
                    {
                        id: 6,
                        name: 'potato',
                        price: 10,
                        count: 1,
                        ischecked: true
                    }
                ]
            }
        ]
    },
    computed: {
        totalPrice: function() {
            var total = 0;
            for(var i = 0;i<this.list.length;i++){
                for(var j = 0;j<this.list[i].product.length;j++){
                    if(this.list[i].product[j].ischecked){
                        total += this.list[i].product[j].price * this.list[i].product[j].count;
                    }
                }
                
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }

    },
    methods: {
        handleReduce: function(index, index2) {
            if(this.list[index].product[index2].count === 1) return;
            this.list[index].product[index2].count--;
        },
        handleAdd: function(index, index2) {
            this.list[index].product[index2].count++;
        },
        handleRemove: function(index, index2){
            this.list[index].product.splice(index2, 1);
        },


        handleRemoveAllChecked: function(){
            
            for(var i = 0;i<this.list.length;i++){
                for(var j = 0;j<this.list[i].product.length;j++){
                    var item = {
                        id: this.list[i].product[j].id,
                        name: this.list[i].product[j].name,
                        price: this.list[i].product[j].price,
                        count: this.list[i].product[j].count,
                        ischecked: false
                    };
                    this.list[i].product.splice(j, 1, item);
                }
                
            }
        },
        handleAddAllChecked: function(){
            for(var i = 0;i<this.list.length;i++){
                for(var j = 0;j<this.list[i].product.length;j++){
                    var item = {
                        id: this.list[i].product[j].id,
                        name: this.list[i].product[j].name,
                        price: this.list[i].product[j].price,
                        count: this.list[i].product[j].count,
                        ischecked: true
                    };
                    this.list[i].product.splice(j, 1, item);
                }
                
            }
        },
        handleAddChecked: function(index, index2){
            var item = {
                id: this.list[index].product[index2].id,
                name: this.list[index].product[index2].name,
                price: this.list[index].product[index2].price,
                count: this.list[index].product[index2].count,
                ischecked: true
            };
            this.list[index].product.splice(index2, 1, item);
        },
        handleRemoveChecked: function(index, index2){
            var item = {
                id: this.list[index].product[index2].id,
                name: this.list[index].product[index2].name,
                price: this.list[index].product[index2].price,
                count: this.list[index].product[index2].count,
                ischecked: false
            };
            this.list[index].product.splice(index2, 1, item);
        }

    }

});
