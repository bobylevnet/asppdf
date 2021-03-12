import { createStore } from 'vuex'
import { AuthInterface } from '@/models/interfaces/Auth.interface'
//import { TargetStateInterface } from '@/models/store/TargetState.interface'
import apiClient from '@/api-client'
import { AuthStateInterface } from '@/models/store/AuthState.interface'
import router from '@/router'


const authintr: AuthInterface = {
    Accesstoken: "",
    Fullnameuser: "",
    IDuser: 0,
    Nameuser: "",
    Target: [],

}

// начальное состояние:
const state: AuthStateInterface = {
    auth: authintr 
}



export default createStore({
    state: state,
    mutations: {
        authorized(state: AuthStateInterface, aut: AuthInterface) { 

              //console.log(aut)
            state.auth = aut 
           // localStorage.setItem("ACCESS_TOKEN", aut.Accesstoken)
           // localStorage.setItem("TARGET", JSON.stringify(aut.Target))
            router.push('/main')

        }

    },

    actions: {

        auth({ commit, state }) {
            
           // if (state.auth.Accesstoken == "") { 
                apiClient.base.auth().then((data: AuthInterface) => {
                    //data.Accesstoken
                    commit('authorized', data)
                })
        //   }
           
        },

       


    },

    modules: {

    }
})


