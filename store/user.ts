import { MutationTree } from 'vuex'
export const state = () => ({
  user: {
    id: null,
    email: null,
    password: null,
    address: null,
    phone: null,
    name: null,
  },
  isAuth: false,
})

export const mutations: MutationTree<User> = {
  addUser(state, payload) {
    state.user = payload
    state.isAuth = true
  },

  logoutUser(state,payload){
    state.user = payload,
    state.isAuth = false


  }

}
