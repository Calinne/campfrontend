<template>
  <div class="owner-dashboard">
    <h1>Owner Dashboard</h1>
    <button @click="goToMySpots">My Spots</button>
    <button @click="goToNewSpot">New Camping Spot</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goToMySpots = () => {
      router.push('/owner-camping-spots');
    };

    const goToNewSpot = () => {
      router.push('/create-camping-spot');
    };

    return {
      goToMySpots,
      goToNewSpot,
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
    
