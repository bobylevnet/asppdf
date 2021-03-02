import { createStore } from 'vuex'
import { TargetInterface } from '@/models/items/Target.interface'
import { TargetStateInterface } from '@/models/store/TargetState.interface'
import apiClient from '@/api-client'


// начальное состояние:
const state: TargetStateInterface = {
    loading: false,
    target: [],
    filter: "", 
}
const model = "target"


export default createStore({
    state: state,
    mutations: {

        loadingItems(state: TargetStateInterface) {
            state.loading = true
            state.target = []
        },
        loadedItems(state: TargetStateInterface, target: TargetInterface[]) {
            state.target = target
            state.loading = false
            
        },
       
        selectTarget(state: TargetStateInterface, params: {
            id: number,
            selected: boolean
        }) {
            const { id, selected } = params
            const target = Object.values(state.target).find(o => o.id === id)
            if (target) {
                target.selected = selected
            }
        }
    },

    actions: {

        loadItems({ commit, state }) {

            commit('loadingItems')

        
            setTimeout(() => apiClient.base.reqeust(model, "find", `"target_name":"${state.filter}"`).then((data: TargetInterface[]) => {
                commit('loadedItems', data)
        }), 1000)
        },

        selectTarget({ commit }, params: {
            id: number
            selected: boolean
        }) {
            commit('selectTarget', params)
        }
        

    },

    modules: {

    }
})

    
