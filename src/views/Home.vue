<template>

<AuthComponent
  :model="auth"
 />

  <div class="home">

   <FindComponent  @find="onFilterTarget"/>
    <TargetListComponent
      :targets="target"
      :loading="loading"
      @selectTarget="onSelectTarget"
      :selected="selecttarget"
    />

    <UsersListComponent 
      :items="users"
      :loading="loading"
      @selectUser="onSelectUser"
    />


    <h2>Выберите файлы</h2>
     <UploadFiles  :loading="loadingupd" @chooseFile="onChooseFiles" />
 
      <FilesListComponent  :files="files" @delete="onDeletefiles"/>

  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import store  from "@/store/stusers"
import stupload from "@/store/stupload"
import sttarget from "@/store/sttarget"
import stfiles from "@/store/stfiles"
import stauth from "@/store/stauth"
import UsersListComponent from "@/components/items/UsersList.component.vue";
import TargetListComponent from "@/components/items/TargetList.component.vue";
import FilesListComponent from "@/components/items/FilesList.component.vue"
import { UsersInterface } from "@/models/interfaces/Users.interface";
import UploadFiles from "@/components/upload/Upload.component.vue";
import { UploadInterface } from "@/models/upload/Upload.interface";
import { TargetInterface } from "@/models/interfaces/Target.interface";
import FindComponent  from "@/components/items/Find.component.vue"
 import { debounce } from "throttle-debounce"; 
import { FilesInterface } from "@/models/interfaces/Files.interface";
import AuthComponent from "@/components/auth/Auth.component.vue"



export default defineComponent({
  name: "Home",
  components: {
    UsersListComponent,
    UploadFiles,
    TargetListComponent,
    FindComponent,
    FilesListComponent,
    AuthComponent,
  },
  setup() {

    //дулаение загруженных файлов 
/*     const onDeleteFiles = (file: FilesInterface) => {
         // stfiles.state.
    } */

    const onFilterTarget = debounce(500, (txt: string) => {

        sttarget.state.filter = txt
        sttarget.dispatch('filterTargets', {
          filter: txt
        });
 
    });


   const onChooseFiles = (upload: UploadInterface) => {
      stupload.dispatch('uploadFiles', {
            files: upload
      });
    };


    const onDeletefiles = (f: File) => {
      console.log("file", f)
        stupload.dispatch('deleteFiles', {
            fi: f
        });

    };

    const onSelectTarget = (target: TargetInterface) => {
      
      sttarget.dispatch('selectTarget', {
        UserTargetID: target.UserTargetID,
        selected: !target.selected,
      });
      store.dispatch('loadUsers', { idtarget: target.UserTargetID} );
    };


    const onSelectUser = (item: UsersInterface) => {
      store.dispatch('selectUser', {
        id: item.id,
        selected: !item.selected,
      });
    };

    const users = computed(() => {
      return store.state.users;
    });

    const target = computed(() => {
      return sttarget.state.target;
    });
    
    const selecttarget = computed(() => {
      return sttarget.state.selectedparent;
    });

    const files = computed(() => {
      console.log("files", stupload.state.files.files)
      return stupload.state.files.files;
    });

    


    const auth = computed(() => {
     console.log("stauth", stauth.state)
     return stauth.state.auth
    })

   
    onMounted(() => {
      stfiles.dispatch('loadFiles');
      sttarget.dispatch('loadTargets');

    });


  
    const loading = computed(() => {
      return store.state.loading;
    });
 
    const loadingupd = computed(() => {
      return stupload.state.loading;
    });


    return {
      users,
      target,
      loading,
      loadingupd,
      onSelectUser,
      onChooseFiles,
      onSelectTarget,
      onFilterTarget,
      auth,
      files,
      selecttarget,
      onDeletefiles,
    };
  },
});
</script>