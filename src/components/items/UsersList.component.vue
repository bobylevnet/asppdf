<template>
<div>
<h3>Пользователи {{ loading }}:</h3>

<Loader v-show="loading" />
    <ul v-show="!loading">
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
import { UsersInterface } from "@/models/interfaces/Users.interface";
import ItemComponent from "./children/Users.component.vue";
import Loader from '@/components/shared/Loader.component.vue'

export default defineComponent({
  components: {
    ItemComponent,
    Loader
  },
  props: {
    items: {
      type: Array as PropType<UsersInterface[]>,
    },
    loading: {
        type: Boolean
    }
  },
emits: ['selectUser'],
  setup(props, {emit}) {

    const onUserSelect = (user: UsersInterface) => {
      user.selected = !user.selected;
     // console.log("onItemSelect", item.id, item.selected);
      emit('selectUser', user)
    };

    return {
      onUserSelect,
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