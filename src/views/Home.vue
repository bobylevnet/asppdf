<template>

<AuthComponent
  :model="auth"
 />

  <div class="home">
    <ItemsListComponent 
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />

    <FindComponent  @find="onFilterTarget"/>

      <TargetListComponent
      :targets="target"
      :loading="loading"
      @selectTarget="onSelectTarget"
    />

     <UploadFiles  :loading="loadingupd" @chooseFile="onChooseFiles" />

      <FilesListComponent  :files="files"/>

  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import store  from "@/store"
import stupload from "@/stupload"
import sttarget from "@/sttarget"
import stfiles from "@/stfiles"
import stauth from "@/stauth"
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import TargetListComponent from "@/components/items/TargetList.component.vue";
import FilesListComponent from "@/components/items/FilesList.component.vue"
import { ItemInterface } from "@/models/items/Item.interface";
import UploadFiles from "@/components/upload/Upload.component.vue";
import { UploadInterface } from "@/models/upload/Upload.interface";
import { TargetInterface } from "@/models/items/Target.interface";
import FindComponent  from "@/components/items/Find.component.vue"
 import { debounce } from "throttle-debounce"; 
import { FilesInterface } from "@/models/items/Files.interface";
import AuthComponent from "@/components/auth/Auth.component.vue"



export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
    UploadFiles,
    TargetListComponent,
    FindComponent,
    FilesListComponent,
    AuthComponent
  },
  setup() {

    //дулаение загруженных файлов 
    const onDeleteFiles = (file: FilesInterface) => {
         // stfiles.state.
    }

    const onFilterTarget = debounce(500, (txt: string) => {

        sttarget.state.filter = txt
        sttarget.dispatch('loadItems', {
          filter: txt
        });
 
    });


   const onChooseFiles = (upload: UploadInterface) => {
   


      stupload.dispatch('uploadFiles', {
            files: upload
      });
    };

    const onSelectTarget = (target: TargetInterface) => {
      sttarget.dispatch('selectTarget', {
        id: target.id,
        selected: !target.selected,
      });
    };


    const onSelectItem = (item: ItemInterface) => {
      store.dispatch('selectItem', {
        id: item.id,
        selected: !item.selected,
      });
    };

    const items = computed(() => {
      return store.state.items;
    });

    const target = computed(() => {
      return sttarget.state.target;
    });
    

    const auth = computed(() => {
      console.log("stauth",stauth.state)
      return stauth.state.auth
    })
   
    onMounted(() => {
      stauth.dispatch('auth');
      store.dispatch('loadItems');
      sttarget.dispatch('loadItems');
    });


  
    const loading = computed(() => {
      return store.state.loading;
    });
 
    const loadingupd = computed(() => {
      return stupload.state.loading;
    });


    return {
      items,
      target,
      loading,
      loadingupd,
      onSelectItem,
      onChooseFiles,
      onSelectTarget,
      onFilterTarget,
      auth,
    };
  },
});
</script>