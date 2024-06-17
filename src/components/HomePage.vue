<template>
  <div class="home-page">
    <h1>Welcome to Camperz</h1>
    <button @click="goToCampingSpots">Discover Camping Spots</button>
    
    <div class="about-section">
      <h2>About Camperz</h2>
      <p>Camperz is your ultimate platform to find and book the best camping spots around the world.</p>
    </div>

    <div class="contact-section">
      <h2>Contact Us</h2>
      <p>For enquiries, please call: <strong>+123 456 7890</strong></p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goToCampingSpots = () => {
      router.push('/spots');
    };

    return {
      goToCampingSpots,
    };
  },
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}

.about-section, .contact-section {
  margin-top: 20px;
  padding: 10px;
  border-top: 1px solid #ccc;
}

.about-section p, .contact-section p {
  margin: 10px 0;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
