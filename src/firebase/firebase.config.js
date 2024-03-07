import { initializeApp, } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQysagE3aGiM39xem9iU-59w3lIuQ8sfs",
  authDomain: "dream-craft-events-da8fb.firebaseapp.com",
  projectId: "dream-craft-events-da8fb",
  storageBucket: "dream-craft-events-da8fb.appspot.com",
  messagingSenderId: "923847074423",
  appId: "1:923847074423:web:6cc8329fa7464c9a751c72"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app