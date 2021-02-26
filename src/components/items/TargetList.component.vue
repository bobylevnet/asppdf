<template>
<div>
<h3>Items - loading: {{ loading }}:</h3>
    <ul>
      <ItemComponent
        v-for="item in items"
        :key="item.id"
        :model="item"
        @select="onItemSelect"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TargetInterface } from "@/models/items/Target.interface";
import ItemComponent from "./children/Item.component.vue";
import Loader from '@/components/shared/Loader.component.vue'

export default defineComponent({
  components: {
    ItemComponent
  },
  props: {
    items: {
      type: Array as PropType<TargetInterface[]>,
    },
    loading: {
        type: Boolean
    }
  },
emits: ['selectItem'],
  setup(props, {emit}) {

    const onItemSelect = (item: TargetInterface) => {
     // item.selected = !item.selected;
     // console.log("onItemSelect", item.id, item.selected);
      emit('selectItem', item)
    };

    return {
      onItemSelect,
    };
  },
});
</script>

<style lang="scss">
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
</style>