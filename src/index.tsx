import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCeT9i4RGsZDrmYKm2HsQVlLJLcJcOmlr0",
  authDomain: "cps-services-kiosk.firebaseapp.com",
  projectId: "cps-services-kiosk",
  storageBucket: "cps-services-kiosk.appspot.com",
  messagingSenderId: "240452472400",
  appId: "1:240452472400:web:68423478603079267f8b55",
  measurementId: "G-95WS5RG23M"
};

firebase.initializeApp(firebaseConfig);

// Local emulator setup
// if (window.location.hostname === 'localhost') {
//   firebase.functions().useEmulator('localhost', 5001);
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);