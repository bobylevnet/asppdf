<template>

<!--     ID: number,
    DateCreate: string,
    DateDelete: string
    PathFile: string,
    IDUser: number,
    Idtarger: number,
} -->
  <li    :class="cssClass"  >
    <div class="selected-indicator"></div>
    <div class="name"> <span> Файл - </span>{{ model.name }} 
    <span>Размер </span>  {{ Math.round(model.size/1024) }} 
    <span>кБ </span> 
    <input type="button" @click="onClick" value="Удалить"/> 
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { FilesInterface } from "@/models/interfaces/Files.interface";
export default defineComponent({
  props: {
    model: {
      type: Object as PropType<File>,
    },
  },
  emits: ["delete"],

  setup(props, { emit }) {

    const onClick = () => {
     console.log("deleteing one"  , props.model)
     emit("delete", props.model);

    };
    return {
       onClick,
    };
  },

});
</script>

<style lang="scss">
li.item {
  padding: 0;
  outline: solid 1px #eee;
  display: grid;
  grid-template-columns: 1.7em auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
  .name {
    padding: 5px;
    text-align: left;
  }
  .selected-indicator {
    padding: 5px;
    font-size: 3em;
    line-height: 0.5em;
    padding: 5px;
    color: lightgray;
  }
  &.selected {
    .selected-indicator {
      color: skyblue;
    }
  }
  &:hover {
    background-color: #eee;
  }
}
</style>