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


        uplFiles(state: UploadStateInterface, frmData: FormData) { 
            
          //  let test: { [id: string]: any; } = {};
           let i: number
            state.files.formdata = frmData
           frmData.forEach((value, key) => { 
               if (value instanceof File) { 
                   state.files.files.push(value)
               }   
           })
        },

        delFile(state: UploadStateInterface, f: File) {
            console.log('del', f)

            const index = state.files.files.indexOf(f)
            if (index > -1) {
                state.files.files.splice(index, 1);
            }
                
        }


    },
    
        
    

    actions: {

        
        deleteFiles({ commit }, params: {
            fi: File
        })
        {
            commit("delFile", params.fi)
        },

        uploadFiles({ commit }, params: {
            files: UploadInterface})    {

          //  commit('uploadingFiles', params)
            

       // setTimeout(() => apiClient.upload.fetchItems(state.files.formdata).then((data: UploadInterface) => {
     
            commit('uplFiles', params.files.formdata)
           // }), 1000)
        }

    },

    modules: {

    }
})


