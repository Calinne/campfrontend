<template>
  <div v-if="user">
    <h1>Welcome, {{ user.name }}</h1>
    <button @click="goToEditProfile">Edit Profile</button>

    <!-- <div v-if="user.type === 'owner'">
      <button @click="goToOwnerCampingSpots">My Camping Spots</button>
      <button @click="goToCreateCampingSpot">Create New Camping Spot</button>
    </div> -->

  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = store.state.user;

    const goToEditProfile = () => {
      router.push('/editprofile');
    };

    return {
      user,
      goToEditProfile,
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
    
