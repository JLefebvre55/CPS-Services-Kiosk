import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import reportWebVitals from './utils/reportWebVitals';
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
if (window.location.hostname === 'localhost') {
  
  // db.useEmulator('localhost', 8080);
  // auth.useEmulator('http://localhost:9099/', { disableWarnings: true });
  firebase.functions().useEmulator('localhost', 5001);
  // storage.useEmulator('localhost', 9199);
}

ReactDOM.render(
  <React.StrictMode>
    <App message = 'Prop test'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();