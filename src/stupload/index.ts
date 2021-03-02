import { createStore } from 'vuex'
import apiClient from '@/api-client'

//'/models/store / Uploadstate.interface'

import { UploadStateInterface } from '@/models/store/Uploadstate.interface'
import { UploadInterface } from '@/models/upload/Upload.interface'
//mport { FilesInterface } from '@/models/files/Files.interface'



let frmd: FormData = new FormData();

const frmdata: UploadInterface = { 
    formdata: frmd,
    files: []
}

// начальное состояние:
const state: UploadStateInterface = {
    loading: false,
    files: frmdata
}

export default createStore({
    state: state,
    mutations: {
        uploadingFiles(state: UploadStateInterface, params: { 
                files: UploadInterface
        }) {
            state.loading = true 
            state.files = params.files
        },

        uploadedFiles(state: UploadStateInterface, formD: UploadInterface) {
            state.loading = false
            //formD
        },
        
    },

    actions: {
        
        uploadFiles({ commit }, params: {
            files: UploadInterface
        })
        {

            commit('uploadingFiles', params)
            
        setTimeout(() => apiClient.upload.fetchItems(state.files.formdata).then((data: UploadInterface) => {
                
                 commit('uploadedFiles', data)
            }), 1000)
        }

    },

    modules: {

    }
})


