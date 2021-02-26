<template>
  <div class="home">
    <ItemsListComponent
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />

   
    <UploadFiles  :loading="loadingupd" @chooseFile="onChooseFiles" />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import store  from "@/store"
import stupload from "@/stupload"
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";
import UploadFiles from "@/components/upload/Upload.component.vue";
import { UploadInterface } from "@/models/upload/Upload.interface";


export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
    UploadFiles,
  },
  setup() {

   // const filesStore= useFilesStore();


   const onChooseFiles = (upload: UploadInterface) => {
   
   console.log("choose", upload)

      stupload.dispatch('uploadFiles', {
            files: upload
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


    onMounted(() => {
      store.dispatch('loadItems');
    });


    const loading = computed(() => {
      return store.state.loading;
    });
 
  const loadingupd = computed(() => {
      return stupload.state.loading;
    });


    return {
      items,
      loading,
      loadingupd,
      onSelectItem,
      onChooseFiles,
    };
  },
});
</script>