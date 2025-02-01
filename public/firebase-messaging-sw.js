importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBxhU0K7sCZamtpXgQlAsqHjXYLEnO_gCM",
  authDomain: "pazaryeri-90eaa.firebaseapp.com",
  projectId: "pazaryeri-90eaa",
  storageBucket: "pazaryeri-90eaa.firebasestorage.app",
  messagingSenderId: "886357373647",
  appId: "1:886357373647:web:18767443a73980dd9dbdba"
  measurementId: "",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
