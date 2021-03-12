<template>
<div>
<h3>Файлы</h3>
    <ul id="navif">


      <FilesComponent
        v-for="file in files"
        :key="file.id"
        :model="file"
        @delete="onDelete"
      /> 
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FilesInterface } from "@/models/interfaces/Files.interface";
import FilesComponent from "./children/Files.component.vue";
import Loader from '@/components/shared/Loader.component.vue'

export default defineComponent({
  components: {
    FilesComponent
  },
  props: {
    files: {
      type: Array as PropType<File[]>,
    },
  },
  emits: ["delete"],

  setup(props, {emit}) {

    const onDelete = () => {

         emit("delete",props.files )
    };

    return {
      onDelete,
    };
  },
});
</script>





<style lang="scss">
#navif {
    width: 80%;
    height: 20em;
    line-height: 2em;
    border: 1px solid #ccc;
    padding: 0;
    margin: 0;
    overflow: scroll;
    overflow-x: hidden;
    margin: 0 auto;
}
</style>