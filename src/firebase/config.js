import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDP4IJEnBE_WlNaOPdeY465od55DXJeAg8',
  authDomain: 'fir-lingo.firebaseapp.com',
  projectId: 'fir-lingo',
  storageBucket: 'fir-lingo.appspot.com',
  messagingSenderId: '822491048068',
  appId: '1:822491048068:web:4ef95629affe27f2ff7ad1',
};

const app = initializeApp(firebaseConfig);

export default app;
