<template>
  <div>
    <h1>Create a New Camping Spot</h1>
    <form @submit.prevent="createSpot">
      <div>
        <label>Name:</label>
        <input v-model="name" required />
      </div>
      <div>
        <label>Street:</label>
        <input v-model="street" required />
      </div>
      <div>
        <label>City:</label>
        <input v-model="city" required />
      </div>
      <div>
        <label>Country:</label>
        <input v-model="country" required />
      </div>
      <div>
        <label>Description:</label>
        <textarea v-model="description" required></textarea>
      </div>
      <div>
        <label>Price per Night:</label>
        <input type="number" v-model="pricePerNight" required />
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const name = ref('');
    const street = ref('');
    const city = ref('');
    const country = ref('');
    const description = ref('');
    const pricePerNight = ref(0);

    const createSpot = async () => {
      try {
        const spotData = {
          ownerId: store.state.user.id,
          name: name.value,
          street: street.value,
          city: city.value,
          country: country.value,
          description: description.value,
          pricePerNight: pricePerNight.value,
        };

        await store.dispatch('createCampingSpot', spotData);
        router.push('/owner-camping-spots');
      } catch (error) {
        console.error('Failed to create camping spot:', error);
      }
    };

    return {
      name,
      street,
      city,
      country,
      description,
      pricePerNight,
      createSpot,
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
    
