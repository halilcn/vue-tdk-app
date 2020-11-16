import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    word: '',
    response: []
  },
  mutations: {
    setResponse (state, payload) {
      state.response = []
      setTimeout(function () {
        if (payload !== undefined) {
          state.response = payload
        } else {
          state.response = '0'
        }
      }, 500)
    }
  },
  actions: {
    wordPost ({ commit }, payload) {
      if (payload.length === 0) {
        commit('setResponse', 'null')
        return 0
      }
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
