const app = new Vue({
  el:'#app',
  data:{
    books: [{
      name: "《算法导论》",
      beginDate: "2006-9",
      price: 85.00,
      count: 1
    },
      {
        name: "《UNIX编程艺术》",
        beginDate: "2006-2",
        price: 59.00,
        count: 1
      },
      {
        name: "《编程大全》",
        beginDate: "2008-10",
        price: 39.00,
        count: 1
      },
      {
        name: "《代码大全》",
        beginDate: "2006-3",
        price: 128.00,
        count: 1
      },
    ]
  },
  computed:{
    totalPrice () {
      // let countPrice =　0
      // for(let item of this.books ){
      //    countPrice+= item.price*item.count
      // }
      // return countPrice
      return this.books.map(book => book.count * book.price).reduce((preValue,currentVlue)=>preValue+currentVlue)

    }
  },
  filters:{
    showPrice(price){
      return "￥" + price.toFixed(2)
    }
  },
  methods:{
    decrement(index){
      this.books[index].count--
    },
    increment(index){
      this.books[index].count++
    },
    remove(index){
      this.books.splice(index,1)
    }
  }
})