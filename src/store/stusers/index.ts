import { createStore } from 'vuex'
import { UsersInterface } from '@/models/interfaces/Users.interface'
import { UsersStateInterface } from '@/models/store/UsersState.interface'
import apiClient from '@/api-client'
// начальное состояние:
const state: UsersStateInterface = {
    loading: false,
    users: []
}
export default createStore({
    state: state,
    mutations: {
        loadingUsers(state: UsersStateInterface) {
            state.loading = true
            state.users = []
        },
        loadedUsers(state: UsersStateInterface, users: UsersInterface[]) {
            state.users = users
            state.loading = false
        },
    
        selectUser(state: UsersStateInterface, params: {
            id: number,
            selected: boolean
        }) {
            const { id, selected } = params
            const users = Object.values(state.users).find(o => o.id === id)
            if (users) {
                users.selected = selected
            }
        }
    },

    actions: {

        loadUsers({ commit, state }, params: {
            idtarget: number
        }) {
            commit('loadingUsers')
            const {idtarget} = params 

       apiClient.base.reqeust(`/users/targets/${idtarget}`).then((data: UsersInterface[]) => {
                commit('loadedUsers', data)
        })
        },

        selectUser({ commit }, params: {
            id: number
            selected: boolean
        }) {
            commit('selectUser', params)
        }
        

    },

    modules: {

    }
})

    
