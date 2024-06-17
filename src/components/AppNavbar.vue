<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/bookings">Bookings</router-link></li>
      <li><button @click="logout">Log Out</button></li>
    </ul>
  </nav>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'AppNavbar',
  setup() {
    const store = useStore();
    const router = useRouter();

    const logout = () => {
      store.commit('setUser', null);
      router.push('/login');
    };

    return {
      logout,
    };
  },
};
</script>

<style scoped>
nav ul {
  list-style: none;
  display: flex;
  gap: 10px;
}

nav ul li {
  display: inline;
}
</style>
