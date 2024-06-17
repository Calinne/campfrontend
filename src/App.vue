<template>
  <div id="app">
    <AppNavbar v-if="!isLoginPage" />
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
  },
  setup() {
    const route = useRoute();
  const store = useStore();
  const isLoginPage = computed(() => route.path === '/login');
  const user = computed(() => store.state.user);
  const isOwnerDashboard = computed(() => user.value && user.value.type === 'owner');

  return {
    isLoginPage,
    isOwnerDashboard,
    };
  },
};
</script>

<style>

</style>
