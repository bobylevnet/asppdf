import { createStore } from 'vuex'
import { TargetInterface } from '@/models/interfaces/Target.interface'
import { TargetStateInterface } from '@/models/store/TargetState.interface'
import apiClient from '@/api-client'
import stauth from '@/store/stauth'



// начальное состояние:
const state: TargetStateInterface = {
    loading: false,
    target: [],
    selectedparent: 0,
    filter: "",
    targetfind: [],
}



export default createStore({
    state: state,
    mutations: {

        loadingTargets(state: TargetStateInterface) {
            state.loading = true
            state.target = []
        },

        loadedTargets(state: TargetStateInterface, target: TargetInterface[]) {
            state.target = target
            state.loading = false
            state.targetfind = target

        },

        filteringTargets(state: TargetStateInterface, params: { filter: string }) {
            const { filter } = params 
          
            state.target = Object.values(state.targetfind).filter(function (el) { 
                return el.TargetName.toLowerCase().indexOf(filter.toLocaleLowerCase()) > -1
           })
            
            console.log('targets', state.target)
        },

        selectTarget(state: TargetStateInterface, params: {
            UserTargetID: number,
            selected: boolean
        }) {

            const { UserTargetID, selected } = params

            const target = Object.values(state.target).find(o => o.UserTargetID === UserTargetID)
            if (target) {
                
                state.selectedparent = target.UserTargetID
                target.selected = selected
            }
        }
    },

    actions: {

            loadTargets({ commit, state }) {

                commit('loadingTargets')

                let id_user = stauth.state.auth.IDuser
                let url: string 

            
            url = `/target/select/${id_user}`
            apiClient.target.reqeust(url).then((data: TargetInterface[]) => {
                    commit('loadedTargets', data)
                })
            },

            //фильтруем цели
            filterTargets({ commit }, params: {
                filter: string
            }) { 

                commit('filteringTargets', params)
            },

            //выбор целей
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


