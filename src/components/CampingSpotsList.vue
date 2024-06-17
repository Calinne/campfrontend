<template>
  <div>
    <h1>Camping Spots</h1>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Search..." />
      <button @click="filterSpots">Search</button>
    </div>
    <ul>
      <li v-for="spot in filteredCampingSpots" :key="spot.id">
        <img :src="spot.images.length ? `data:image/jpeg;base64,${spot.images[0].imageData}` : ''" alt="Camping Spot Image" width="100" />
        <router-link :to="{ name: 'CampingSpotDetails', params: { id: spot.id } }">{{ spot.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const searchQuery = ref('');
    const campingSpots = ref([]);

    const fetchCampingSpots = async () => {
      await store.dispatch('fetchCampingSpots');
      campingSpots.value = store.state.campingSpots;
    };

    const filterSpots = () => {
      return campingSpots.value.filter((spot) => {
        return (
          spot.name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          spot.country?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          (spot.spotsAmenities && spot.spotsAmenities.some((amenity) =>
            amenity.amenity?.name?.toLowerCase().includes(searchQuery.value.toLowerCase())
          ))
        );
      });
    };

    const filteredCampingSpots = computed(() => {
      return filterSpots();
    });

    onMounted(fetchCampingSpots);

    return {
      searchQuery,
      filteredCampingSpots,
      filterSpots,
    };
  },
};

//interactive map method : 

</script>


    <style scoped>
    .btn {
        background-color: #007BFF;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
    }
    .btn:hover {
        background-color: white;
        color: black;
        border: 2px solid #007BFF;
    }
    .input-field {
        border: 2px solid #007BFF;
        border-radius: 5px;
        padding: 10px;
        width: 95%;
        margin: 10px 0;
    }
    .container {
        padding: 20px;
        border-radius: 5px;
        background-color: #f2f2f2;
    }
    </style>
    
