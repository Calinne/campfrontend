<template>
    <div v-if="user">
      <h1>Edit Profile</h1>
      <form @submit.prevent="updateProfile">
        <div>
          <label>Name:</label>
          <input v-model="user.name" required />
        </div>
        <div>
          <label>Email:</label>
          <input v-model="user.email" required />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const user = store.state.user;
  
      const updateProfile = async () => {
        try {
          await store.dispatch('updateUser', user);
          alert('Profile updated successfully');
        } catch (error) {
          console.error('Profile update failed:', error);
        }
      };
  
      return {
        user,
        updateProfile,
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
    
  