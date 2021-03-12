import { createStore } from 'vuex'
import { FilesInterface } from '@/models/interfaces/Files.interface'
import { FilesStateInterface } from '@/models/store/FilesState.interface'
import apiClient from '@/api-client'
import stauth from '../stauth'


// начальное состояние:
const state: FilesStateInterface = {
    files: []
}
const model = "files"


export default createStore({
    state: state,
    mutations: {

       
        loadedFiles(state: FilesStateInterface, files: FilesInterface[]) {
            state.files = files
        },

        deletedFiles(state: FilesStateInterface, files: FilesInterface[]) {
              state.files = files
        },
          /*  const { id, selected } = params
            const target = Object.values(state.target).find(o => o.id === id)
            if (target) {
                target.selected = selected
            }*/
        },
    

    actions: {

        loadFiles({ commit, state }) {
            let iduser = stauth.state.auth.IDuser

            apiClient.base.reqeust(`/files/select/${iduser}`).then((data: FilesInterface[]) => {
                commit('loadedFiles', data)
            })
        },

        deletingFile({ commit }, params: {
            id: number
        }) {
            const { id } = params 
          apiClient.base.reqeust("/files/upload").then((data: FilesInterface[]) => {
                commit('deletedFiles', data)
            })
           // commit('deleteFiles', params)
        }


    },

    modules: {

    }
})


