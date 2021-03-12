<template>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";

import stauth from "@/store/stauth"
import AuthComponent from "@/components/auth/Auth.component.vue"



export default defineComponent({
  name: "Home",
  components: {
    AuthComponent
  },
  setup() {





   const auth = computed(() => {
      console.log("stauth",stauth.state)
      return stauth.state.auth
    })
   
    onMounted(() => {
      stauth.dispatch('auth');
    });


  
  


    return {
            auth
    };
  },
});
</script>