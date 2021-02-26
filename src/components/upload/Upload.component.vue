<template>



  <Loader v-show="loading" />
   
  
  <div>
    <div v-show="!loading">
            <div class="">
                <input type="file" @change="uploadFile" multiple>
            </div>
    </div>    
  </div>
</template>

<script lang="ts">

import { defineComponent, computed, PropType } from "vue";
import { UploadInterface } from "@/models/upload/Upload.interface";
import Loader from '@/components/shared/Loader.component.vue'


export default defineComponent({
 
 components: {
    Loader
  },
  props: {
    loading: {
        type: Boolean
    }
  },
  emits: ['chooseFile'],
  setup(props, {emit}) {


      const upload: UploadInterface = {
        formdata: new FormData
      }  

     const   uploadFile = (event: any)=>  {
    
        let fls = Object.keys(event.target.files)
       
        for (const i of fls) {
           console.log('file', i)

         upload.formdata.append('files', event.target.files[i])
            // console.log('prosp', props.model)
          }
         console.log('prospfrmdata', upload)
         emit('chooseFile',upload )
      };

    return {
      uploadFile
    }
  }

  
      /*   handleSubmit() {
          const formData = new FormData();
          for (const i of Object.keys(this.files)) {
            formData.append('files', this.files[i])
          }
 */

       /*   axios.post('http://localhost:4000/api/file-upload', formData, {
          }).then((res) => {
            console.log(res)
          })*/

          
    

});
</script>