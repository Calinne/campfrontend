<template>
  <div class="camping-spot-details" v-if="spot">
    <h1>{{ spot.name }}</h1>
    <p>{{ spot.description }}</p>
    <p><strong>Price per night:</strong> ${{ spot.pricePerNight }}</p>
    <div v-if="spot.images && spot.images.length">
      <img v-for="image in spot.images" :src="getImageUrl(image)" :alt="image.description" :key="image.id" />
    </div>
    <div v-if="spot.spotsAmenities.length">
      <h3>Amenities:</h3>
      <ul>
        <li v-for="spotsAmenity in spot.spotsAmenities" :key="spotsAmenity.id">{{ spotsAmenity.amenity.name }}</li>
      </ul>
    </div>
    <div>
      <label for="checkIn">Check-In Date:</label>
      <input type="date" v-model="checkIn" required />
    </div>
    <div>
      <label for="checkOut">Check-Out Date:</label>
      <input type="date" v-model="checkOut" required />
    </div>
    <p><strong>Total Price:</strong> ${{ totalPrice }}</p>
    <button @click="bookSpot">Book</button>
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const spot = ref(null);
    const checkIn = ref('');
    const checkOut = ref('');

    const fetchSpot = async () => {
      const spotId = route.params.id;
      spot.value = await store.dispatch('fetchCampingSpotDetails', spotId);
    };

    const bookSpot = async () => {
      try {
        const bookingData = {
          userId: store.state.user.id,
          campingSpotId: spot.value.id,
          checkIn: checkIn.value,
          checkOut: checkOut.value,
          totalPrice: totalPrice.value,
        };

        await store.dispatch('bookCampingSpot', bookingData);
        alert('Camping spot booked successfully');
      } catch (error) {
        console.error('Booking failed:', error);
      }
    };

    const getImageUrl = (image) => {
      return `data:image/jpeg;base64,${image.imageData}`;
    };

    const goBack = () => {
      router.push('/spots');
    };

    const totalPrice = computed(() => {
      const nights = (new Date(checkOut.value) - new Date(checkIn.value)) / (1000 * 60 * 60 * 24);
      return spot.value.pricePerNight * nights;
    });

    onMounted(fetchSpot);

    return {
      spot,
      checkIn,
      checkOut,
      bookSpot,
      getImageUrl,
      goBack,
      totalPrice,
    };
  },
};
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
    
