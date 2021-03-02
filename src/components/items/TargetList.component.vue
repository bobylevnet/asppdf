<template>
<div>
<h3>Items - loading: {{ loading }}:</h3>
    <ul id="navi">
      <TargetComponent
        v-for="target in targets"
        :key="target.id"
        :model="target"
        @select="onTargetSelect"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TargetInterface } from "@/models/items/Target.interface";
import TargetComponent from "./children/Target.component.vue";
import Loader from '@/components/shared/Loader.component.vue'

export default defineComponent({
  components: {
    TargetComponent
  },
  props: {
    targets: {
      type: Array as PropType<TargetInterface[]>,
    },
    loading: {
        type: Boolean
    }, 
    filter: {
      type: String
    },
  },
emits: ['selectTarget'],
  setup(props, {emit}) {

    const onTargetSelect = (item: TargetInterface) => {
     // item.selected = !item.selected;
     // console.log("onItemSelect", item.id, item.selected);
      emit('selectTarget', item)
    };

    return {
      onTargetSelect,
    };
  },
});
</script>





<style lang="scss">
#navi {
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