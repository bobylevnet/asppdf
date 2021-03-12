<template>
<h3>Пользователь </h3>
<h2 v-if="model"> {{ model.Fullnameuser }}</h2>
<h2>{{model.Target }}</h2>

</template>     
<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { AuthInterface } from "@/models/interfaces/Auth.interface";

export default defineComponent({
  props: {
    model: {
      type: Object as PropType<AuthInterface>,
    },
  },

  //emits: ["auth"],
  setup(props) {
  
    return {
      
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