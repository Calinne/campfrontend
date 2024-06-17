import { createStore } from 'vuex';
import axios from '@/plugins/axios';

export default createStore({
  state: {
    user: null,
    campingSpots: [],
    bookings: [],
    ownerCampingSpots: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setCampingSpots(state, spots) {
      state.campingSpots = spots;
    },
    setOwnerCampingSpots(state, spots) {
      state.ownerCampingSpots = spots;
    },
    setBookings(state, bookings) {
      state.bookings = bookings;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    async login({ commit, dispatch }, credentials) {
      try {
        const response = await axios.post('/Users/login', credentials);
        const userId = response.data.id;
        await dispatch('fetchUser', userId);
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    async fetchUser({ commit }, userId) {
      try {
        const response = await axios.get(`/Users/${userId}`);
        commit('setUser', response.data);
      } catch (error) {
        console.error('Fetching user failed:', error);
        throw error;
      }
    },
    async updateUser({ commit }, userData) {
      try {
        const response = await axios.put(`/Users/${userData.id}`, userData);
        commit('setUser', response.data);
      } catch (error) {
        console.error('Profile update failed:', error);
        throw error;
      }
    },
    async fetchCampingSpots({ commit }) {
      const response = await axios.get('/CampingSpots');
      commit('setCampingSpots', response.data);
    },
    async fetchCampingSpotDetails(_, spotId) {
      const response = await axios.get(`/CampingSpots/${spotId}`);
      return response.data;
    },
    async bookCampingSpot(_, bookingData) {
      const response = await axios.post(`/Booking`, bookingData);
      return response.data;
    },
    
    async fetchBookings({ commit }, userId) {
      try {
        const response = await axios.get('/Bookings');
        const userBookings = response.data.filter((booking) => booking.userId === userId);
        commit('setBookings', userBookings);

//show error message if not ://

      } catch (error) {
        console.error('Error fetching bookings:', error);
        
      }
    },
    
    async fetchOwnerCampingSpots({ commit }, ownerId) {
      const response = await axios.get(`/CampingSpots/${ownerId}`);
      commit('setOwnerCampingSpots', response.data);
    },
    async createCampingSpot({ dispatch }, spotData) {
      await axios.post('/CampingSpots', spotData);
      dispatch('fetchOwnerCampingSpots', spotData.ownerId);
    },
  },
});
