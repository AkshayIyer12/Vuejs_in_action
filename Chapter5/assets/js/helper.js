const APP_LOG_LIFECYCLE_EVENTS = true
let webstore = new Vue({
  el: '#app',
  data: {
    sitename: 'Vue.js Pet Depot',
    cart: [],
    showProduct: true,
    order: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zip: '',
      state: '',
      method: 'Home',
      gift: 'Send As A Gift',
      sendGift: 'Send As A Gift',
      dontSendGift: 'Do Not Send As A Gift'
    },
    products: {},
    states: {
      AL: 'Alabama',
      AR: 'Arizona',
      CA: 'California',
      NV: 'Nevada'
    }
  },
  filters: {
    formatPrice (price) {
      if (!parseInt(price)) {
        return ''
      }
      if (price > 99999) {
        let priceString = (price / 100).toFixed(2)
        let priceArray = priceString.split('').reverse()
        let index = 3
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ',')
          index += 4
        }
        return '$' + priceArray.reverse().join('')
      } else {
        return '$' + (price / 100).toFixed(2)
      }
    }
  },
  methods: {
    addToCart (aProduct) {
      this.cart.push(aProduct.id)
    },
    showCheckout () {
      this.showProduct = !this.showProduct
    },
    submitForm () {
      alert('submitted')
    },
    checkRating (n, myProduct) {
      return myProduct.rating - n >= 0
    },
    cartCount (id) {
      let count = 0
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++
        }
      }
      return count
    },
    canAddToCart (aProduct) {
      return aProduct.availableInventory > this.cartCount(aProduct.id)
    }
  },
  computed: {
    cartItemCount () {
      return this.cart.length || ''
    },
    sortedProducts () {
      function compare (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1
        }
        return 0
      }
      if (this.products.length > 0) {
        let productsArray = this.products.slice(0)
        return productsArray.sort(compare)
      }
    }
  },
  beforeCreate () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeCreate')
    }
  },
  created () {
    axios.get('./products.json')
    .then(res => {
      this.products = res.data.products
      console.log(this.products)
    })
  },
  beforeMount () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeMount')
    }
  },
  mounted () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('mounted')
    }
  },
  beforeUpdate () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeUpdate')
    }
  },
  updated () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('updated')
    }
  },
  beforeDestroy () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeDestroy')
    }
  },
  destroyed () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('destroyed')
    }
  }
})
