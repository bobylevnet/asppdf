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
import { useItemsStore } from "@/store/items";
import {useFilesStore} from "@/store/files"
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";
import { MutationType, StoreModuleNames } from "@/models/store";
import UploadFiles from '@/components/files/UploadFiles.component.vue'
import { FilesInterface } from "@/models/files/Files.interface";

export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
    UploadFiles,
  },
  setup() {

    const filesStore= useFilesStore();



      /*Выбор файлов */
    const onChooseFiles = (files: FilesInterface) =>  {
        filesStore.action(MutationType.files.chooseFile , {
          files: files.files
        });
    };

    const itemsStore = useItemsStore();

    const onSelectItem = (item: ItemInterface) => {
      itemsStore.action(MutationType.items.selectItem, {
        id: item.id,
        selected: !item.selected,
      });
    };

    const items = computed(() => {
      return itemsStore.state.items;
    });


    onMounted(() => {
      itemsStore.action(MutationType.items.loadItems);
    });


    const loading = computed(() => {
      return itemsStore.state.loading;
    });
 



    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>