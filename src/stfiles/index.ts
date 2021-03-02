import { createStore } from 'vuex'
import { FilesInterface } from '@/models/items/Files.interface'
import { FilesStateInterface } from '@/models/store/FilesState.interface'
import apiClient from '@/api-client'


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

        loadedFiles({ commit, state }) {

          /*  setTimeout(() => apiClient.base.reqeust(model, "find", `"target_name":"${state.id}"`).then((data: FilesInterface[]) => {
                commit('loadedItems', data)
            }), 1000)*/
        },

        deletingFile({ commit }, params: {
            id: number
        }) {
            const { id } = params 
            setTimeout(() => apiClient.base.reqeust(model, "find", `"target_name":"${id}"`).then((data: FilesInterface[]) => {
                commit('deletedFiles', data)
            }), 1000) 
           // commit('deleteFiles', params)
        }


    },

    modules: {

    }
})


