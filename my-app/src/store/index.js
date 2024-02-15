import { createStore } from 'vuex'
import {
    addProductToCartRequest,
    getCartRequest,
    getProductsRequest,
    loginRequest,
    logoutRequest,
    removeProductFromCartRequest
} from "@/utils/api";
import { signupRequest } from "@/utils/api";

export default createStore({
  state: {
    token: localStorage.getItem('myAppToken') || '',
      products: [],
      cartProducts: []
  },
  getters: {
    isAuthenticated: state => !!state.token,
      getProducts: state => state.products,
      getCart: state => state.cartProducts
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
    SET_CARD_PRODUCT: (state, cartProducts) => {
        state.cartProducts = cartProducts
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
        console.log(cartProducts)
    },
    GET_CART_SUCCESS: (state, cartProducts) => {
        state.cartProducts = cartProducts
        console.log(cartProducts)
    },
    REMOVE_CART_PRODUCT: (state, productId) => {
        const i = state.cartProducts.map(item => item.id === productId)
        state.cartProducts.splice(i, 1)
        localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
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
                .then((cartProducts) => {
                    commit('GET_CART_SUCCESS', cartProducts);
                    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
                    resolve();
                })
                .catch(error => {
                    reject(error.shortMessage)
                })
        })
    },
    REMOVE_FROM_CART_REQUEST: ({commit}, product) => {
        return new Promise((resolve, reject) => {
            removeProductFromCartRequest()
                .then(result => {
                    console.log(result)
                    commit('REMOVE_CART_PRODUCT', product.id)
                    commit('GET_CART_SUCCESS')
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
