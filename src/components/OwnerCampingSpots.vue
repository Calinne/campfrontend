<template>
  <div v-if="campingSpots.length">
    <h1>My Camping Spots</h1>
    <ul>
      <li v-for="spot in campingSpots" :key="spot.id">
        {{ spot.name }}
      </li>
    </ul>
  </div>
  <div v-else>
    <h1>No camping spots found.</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const campingSpots = ref([]);

    const fetchOwnerCampingSpots = async () => {
      const response = await store.dispatch('fetchOwnerCampingSpots', store.state.user.id);
      campingSpots.value = response;
    };

    onMounted(fetchOwnerCampingSpots);

    return {
      campingSpots,
    };
  },
};
</script>

<style scoped>

</style>
