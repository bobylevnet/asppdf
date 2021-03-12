<template>
  <div
 
    :class= cssClass
    @click="onClick"

  >
    <div class="selected-indicator">￿</div>
    <div class="name">{{ model.UserTargetID }} {{ model.TargetName }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from "vue";
import { TargetInterface } from "@/models/interfaces/Target.interface";
export default defineComponent({

  props: {
    model: {

      type: Object as PropType<TargetInterface>,
    },
  },
  emits: ["select-item"],

  setup(props, { emit }) {

    const cssClass = computed(() => {
      let css = "item";
      if (props.model?.selected) {
       alert()
      //  css += " selected";
      }
      return css.trim();
    });
    
    const onClick = () => {
     emit("select-item", props.model);
    };

    return {
      cssClass,
      onClick
    };
  },

});
</script>

<style lang="scss">
div.item {
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
  li {

   color: blue;

  }

  li:active {

    color: red;

  }



}
</style>