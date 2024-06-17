<template>
  <div>
    <h1>My Bookings</h1>
    <ul v-if="bookings && bookings.length">
      <li v-for="booking in bookings" :key="booking.id">
        <h3>{{ booking.campingSpotName }}</h3>
        <p>Address: {{ booking.street }}, {{ booking.city }}, {{ booking.country }}</p>
        <p>Check-In: {{ booking.checkIn }}</p>
        <p>Check-Out: {{ booking.checkOut }}</p>
        <p>Total Price: ${{ booking.totalPrice }}</p>
      </li>
    </ul>
    <p v-else>No bookings found.</p>
  </div>
</template>

<script>
import axios from '@/plugins/axios';

export default {
  data() {
    return {
      bookings: []
    };
  },
  methods: {
    fetchBookings() {
      axios.get('/Booking/withdetails')  
        .then(response => {
          this.bookings = response.data;
        })
        .catch(error => {
          console.error('Error fetching bookings:', error);
        });
    }
  },
  mounted() {
    this.fetchBookings();
  }
};
</script>
