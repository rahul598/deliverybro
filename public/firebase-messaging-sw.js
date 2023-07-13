importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyDu1aqEXeVDQ7y4hfBbkb0__9aUSsR6T84",
  authDomain: "delivery-bro-abadc.firebaseapp.com",
  projectId: "delivery-bro-abadc",
  storageBucket: "delivery-bro-abadc.appspot.com",
  messagingSenderId: "864428939826",
  appId: "1:864428939826:web:12f57e52355989efe6fa2b",
  measurementId: "G-C0QTRYBRG8"
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
