import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TO_CLOSE='closeCard';

export default new Vuex.Store({
    state: {
        arr: [Math.floor((Math.random() * 100) + 1)],
    },
    mutations: {
        addCard(state) {
            state.arr.push(Math.floor((Math.random() * 100) + 1));
        },
        toDoSort(state) {
            state.arr.sort();
        },
        toClose(state,i) {
            state.arr.splice(i,1)
        }
    },
    actions: {
        newCard({commit}) {
            commit("addCard")
        },
        toSort({commit}) {
            commit('toDoSort')
        },
        [TO_CLOSE](context,i) {
            context.commit('toClose',i)
        }
    },
    getters:{
        getValues(state) {
            return state.arr;
        }
    }
})