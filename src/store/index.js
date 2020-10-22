import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    word: '',
    response: [] //nul ??
  },
  mutations: {
    setResponse (state, payload) {
      state.response = []

      setTimeout(function () {
        state.response = payload
      }, 500)
    }
  },
  actions: {
    wordPost ({ commit }, payload) {
      console.log(payload)
      axios.post('https://sozluk.gov.tr/gts?ara=' + payload)
        .then(response => {
          console.log(response.data[0])
          commit('setResponse', response.data[0])
        })
        .catch(eror => {
          console.log('Bir sorun oluştu:' + eror)
        })
    }
  },
  getters: {
    results (state) {
      return state.response
    }
  },
  modules: {}
})
