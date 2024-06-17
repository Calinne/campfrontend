<template>
  <div class="login-container">
    <img src="@/assets/CAMPERZ.png" alt="Camperz Logo" class="logo" />
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label>Email:</label>
        <input v-model="email" type="email" required />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit" class="login-button">Login</button>
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
    const email = ref('');
    const password = ref('');

    const login = async () => {
      try {
        await store.dispatch('login', { email: email.value, password: password.value });
        const userType = store.state.user.type;
        if (userType === 'owner') {
          router.push('/owner-dashboard');
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style scoped>

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
  text-align: center;
}

.logo {
  width: 150px;
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #062df2;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #174b79;
}
</style>

