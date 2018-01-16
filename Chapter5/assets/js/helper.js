const APP_LOG_LIFECYCLE_EVENTS = true
let webstore = new Vue({
  el: '#app',
  data: {
    sitename: 'Vue.js Pet Depot',
    product: {
      id: 1001,
      title: 'Cat Food, 25lb bag',
      description: 'A 25 pound bag of <em>irresistible</em>, ' +
        'organic goodness for your cat.',
      price: 2000,
      image: 'assets/images/product-fullsize.png',
      availableInventory: 10,
      rating: 3
    },
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
    addToCart () {
      this.cart.push(this.product.id)
    },
    showCheckout () {
      this.showProduct = !this.showProduct
    },
    removeFromCart () {
      this.cart.pop()
    },
    submitForm () {
      alert('submitted')
    },
    checkRating (n) {
      return this.product.rating - n >= 0
    }
  },
  computed: {
    cartItemCount () {
      return this.cart.length || ''
    },
    canAddToCart () {
      return this.product.availableInventory > this.cartItemCount
    },
    canRemoveFromCart () {
      return this.cart.length > 0
    }
  },
  beforeCreate () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('beforeCreate')
    }
  },
  created () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log('created')
    }
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
