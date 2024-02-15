import { createStore } from 'vuex'
import {
    addProductToCartRequest,
    getCartRequest, getOrdersRequest,
    getProductsRequest,
    loginRequest,
    logoutRequest, performOrderRequest,
    removeProductFromCartRequest
} from "@/utils/api";
import { signupRequest } from "@/utils/api";

export default createStore({
  state: {
    token: localStorage.getItem('myAppToken') || '',
      products: [],
      cartProducts: [],
      orders: []
  },
  getters: {
    isAuthenticated: state => !!state.token,
      getProducts: state => state.products,
      getCart: state => state.cartProducts,
      getOrders: state => state.orders,
  },
  mutations: {
    AUTH_SUCCESS: (state, token) => {
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.token = ''
    },
    SIGNUP_SUCCESS: (state, token) => {
      state.token = token;
    },
    SIGNUP_ERROR: (state) => {
      state.token = ''
    },
    LOGOUT_SUCCESS: (state) => {
        state.token = ''
    },
    LOGOUT_ERROR: (state, token)  => {
        state.token = token
    },
    SET_PRODUCTS: (state, products) => {
        state.products = products
        console.log(products)
    },
    SET_CART_PRODUCTS: (state, cartProducts) => {
        state.cartProducts = cartProducts
    },
    REMOVE_PRODUCT_FROM_CART: (state, productId) => {
        state.cartProducts = state.cartProducts.filter(product => product.id !== productId)
    },
    SET_ORDERS: (state, orders) => {
        state.orders = orders
    }
  },
  actions: {
    AUTH_REQUEST: ({commit}, user) => {
      return new Promise((resolve, reject) => {
        loginRequest(user)
            .then((token) => {
              commit('AUTH_SUCCESS', token);
              localStorage.setItem('myAppToken', token);
              resolve();
            })
            .catch((error) => {
              commit('AUTH_ERROR');
              localStorage.removeItem('myAppToken');
              reject(error);
            })
      });
    },
    SIGNUP_REQUEST: ({commit}, user) => {
      return new Promise((resolve, reject) => {
        signupRequest(user)
            .then((token) => {
              commit('SIGNUP_SUCCESS', token);
              localStorage.setItem('myAppToken', token);
              resolve();
            })
            .catch((error) => {
              commit('SIGNUP_ERROR');
              localStorage.removeItem('myAppToken');
              reject(error);
            })
      });
    },
    LOGOUT_REQUEST: ({commit}) => {
        return new Promise((resolve, reject) => {
            logoutRequest()
                .then((token) => {
                    commit('LOGOUT_SUCCESS', token)
                    localStorage.removeItem('myAppToken')
                    resolve()
                })
                .catch((error) => {
                    commit('LOGOUT_ERROR')
                    reject(error)
                })
        })
    },
    GET_PRODUCTS_REQUEST: ({commit}) => {
        return new Promise((resolve, reject) => {
            getProductsRequest()
                .then(result => {
                    commit('SET_PRODUCTS', result)
                    resolve()
                })
                .catch(error => {
                    reject(error.message)
                })
        })
    },
    ADD_PRODUCT_REQUEST: ({commit}) => {
        return new Promise((resolve, reject) => {
            addProductToCartRequest()
                .then(result => {
                    commit('SET_CARD_PRODUCT', result)
                    localStorage.setItem('cartProducts', JSON.stringify(result))
                    resolve(result)
                })
                .catch(error => {
                    reject(error.message)
                })
        })
    },
    GET_CART_REQUEST: ({commit}) => {
        return new Promise((resolve, reject) => {
            getCartRequest()
                .then(cartProducts => {
                    commit('SET_CART_PRODUCTS', cartProducts)
                    resolve()
                })
                .catch(error => {
                    reject(error.message)
                })
        })
    },
    REMOVE_PRODUCT_FROM_CART_REQUEST: ({commit}, productId) => {
        return new Promise((resolve, reject) => {
            removeProductFromCartRequest(productId)
                .then(() => {
                    commit('REMOVE_PRODUCT_FROM_CART', productId)
                    resolve()
                })
                .catch(error => {
                    reject(error.message)
                })
        })
    },
    PERFORM_ORDER_REQUEST: ({commit}) => {
        return new Promise((resolve, reject) => {
            performOrderRequest()
                .then(() => {
                    commit()
                    resolve()
                })
                .catch(error => {
                    reject(error.message)
                })
        })
    },
    GET_ORDERS_REQUEST: ({commit}) => {
        return new Promise((resolve, reject) => {
            getOrdersRequest()
                .then((orders) => {
                    commit('SET_ORDERS', orders)
                    resolve()
                })
                .catch(error => {
                    reject(error.message)
                })
        })
    }
  },
  modules: {
  }
})
