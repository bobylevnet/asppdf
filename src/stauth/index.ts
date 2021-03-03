import { createStore } from 'vuex'
import { AuthInterface } from '@/models/interfaces/Auth.interface'
//import { TargetStateInterface } from '@/models/store/TargetState.interface'
import apiClient from '@/api-client'
import { AuthStateInterface } from '@/models/store/AuthState.interface'


const authintr: AuthInterface = {
    Accesstoken: "",
    Fullnameuser: "",
    IDuser: 0,
    Nameuser: ""

}

// начальное состояние:
const state: AuthStateInterface = {
    auth: authintr 
}



export default createStore({
    state: state,
    mutations: {

        authorized(state: AuthStateInterface, aut: AuthInterface) { 
              state.auth = aut 
        }

    },

    actions: {

        auth({ commit, state }) {

            apiClient.base.auth().then((data: AuthInterface) => {
                //data.Accesstoken
                commit('authorized', data)
            })
        },

       


    },

    modules: {

    }
})


