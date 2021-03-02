<template>
<div>
  <input type="text"  @input="onInput">
</div>
</template>
<script lang="ts">
import { defineComponent, Events, PropType } from "vue";
//import { TargetInterface } from "@/models/items/Target.interface";
//import TargetComponent from "./children/Target.component.vue";
//import Loader from '@/components/shared/Loader.component.vue'

export default defineComponent({
  components: {
    
  },
  props: {
    loading: {
        type: Boolean
    }
  },
emits: ['find'],
  setup(props, {emit}) {

    const onInput = (event: Event) => {
     // item.selected = !item.selected;
    // console.log('event', ();

     // console.log("onItemSelect", item.id, item.selected);
      emit('find', (<HTMLInputElement>event.target).value)
    };

    return {
      onInput,
    };
  },
});
</script>

