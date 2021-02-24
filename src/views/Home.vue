<template>
  <div class="home">
    <ItemsListComponent
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />

    <UploadFiles  @chooseFiles:="onChooseFiles" />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import store  from "@/store"
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";
//import UploadFiles from '@/components/files/UploadFiles.component.vue'


export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
   // UploadFiles,
  },
  setup() {

   // const filesStore= useFilesStore();



      /*Выбор файлов */
   /* const onChooseFiles = (files: FilesInterface) =>  {
        filesStore.action(MutationType.files.chooseFile , {
          files: files.files
        });
    };*/

   // const itemsStore = useItemsStore();

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
 



    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>