import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const registerFirebaseSW = (serviceWorkerRegistration) => {
  const messaging = getMessaging();

  const vapid = process.env.REACT_FIREBASE_VAPID;

  getToken(messaging, { serviceWorkerRegistration, vapidKey: vapid })
    .then((currentToken) => {
      if (currentToken) {
        console.log('CURRENT TOKEN', currentToken);
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log(
          'No registration token available. Request permission to generate one.'
        );
        // ...
      }
    })
    .catch((err) => {
      console.log(
        'An error occurred while retrieving token for notification. ',
        err
      );
      // ...
    });
};

export const onForegroundMessage = () => {
  try {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // ...
    });
  } catch (error) {
    console.log("Error occurred while subscribing to onMessage: ", error);
  }
};

export default app;
