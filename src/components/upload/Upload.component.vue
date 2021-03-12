<template>



  <Loader v-show="loading" />
   
  <div>
    <div v-show="!loading">
            <div class="">
                <input type="file" name="Выберите файла для отправки"  @change="uploadFile" multiple>
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
        formdata: new FormData,
        files: []
      }  

     const   uploadFile = (event: any)=>  {
    
        //заполняем FromData файлами
        let fls = Object.keys(event.target.files)
        for (const i of fls) {
         upload.formdata.append('files', event.target.files[i])
        }
         emit('chooseFile', upload )
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