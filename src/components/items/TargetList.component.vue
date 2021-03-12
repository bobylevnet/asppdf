<template>
  <div>
    <h3>Цели обработки{{ loading }}:</h3>
    <ul id="navit">
      <li v-for="target in targets"
        :key="target.UserTargetID"  
        :class="[selected==target.UserTargetID ? 'selected':'']" >
        
      <TargetComponent
        @select-item="onTargetSelect"
        :model="target"
      />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TargetInterface } from "@/models/interfaces/Target.interface";
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
    selected: {
      type: Number
    }
  },
emits: ['selectTarget'],
  setup(props, {emit}) {

    const onTargetSelect = (target: TargetInterface) => {

       target.selected = !target.selected
        emit('selectTarget', target)

    };


    return {
      onTargetSelect,
    };
  },
});
</script>





<style lang="scss">
#navit {
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
.selected {
  color: red;
}
</style>