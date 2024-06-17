import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import LoginPage from '@/components/LoginPage.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import HomePage from '@/components/HomePage.vue';
import CampingSpotsList from '@/components/CampingSpotsList.vue';
import CampingSpotDetails from '@/components/CampingSpotDetails.vue';
import OwnerCampingSpots from '@/components/OwnerCampingSpots.vue';
import CreateCampingSpot from '@/components/CreateCampingSpot.vue';
import BookingsPage from '@/components/BookingsPage.vue';
import OwnerDashboard from '@/components/OwnerDashboard.vue';
import EditProfile from '@/components/EditProfile.vue';


const routes = [
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/profile', name: 'Profile', component: ProfilePage },
  { path: '/', name: 'Home', component: HomePage },
  { path: '/spots', name: 'CampingSpotsList', component: CampingSpotsList },
  { path: '/spots/:id', name: 'CampingSpotDetails', component: CampingSpotDetails },
  { path: '/owner-camping-spots', name: 'OwnerCampingSpots', component: OwnerCampingSpots },
  { path: '/create-camping-spot', name: 'CreateCampingSpot', component: CreateCampingSpot },
  { path: '/bookings', name: 'BookingsPage', component: BookingsPage },
  { path: '/owner-dashboard', name: 'OwnerDashboard', component: OwnerDashboard },
  { path: '/editprofile', name: 'EditProfile', component: EditProfile },
  { path: '/', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard to redirect to login if not authenticated
router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.user;

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  // this is to ensure that whoever logs in must be an owner to see the dashboard etccccc...
  if (loggedIn && loggedIn.type === 'owner' && to.path === '/') {
    return next('/owner-dashboard');
  }

  next();
});

export default router;
