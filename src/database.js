import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDJzCpjsLGIleb6qjNyym4m54vH7NaOmRs",
  authDomain: "watercommunity-78e35.firebaseapp.com",
  databaseURL: "https://watercommunity-78e35.firebaseio.com",
  projectId: "watercommunity-78e35",
  storageBucket: "",
  messagingSenderId: "301332631742"
};

firebase.initializeApp(config);

export const database = firebase.database();

export default firebase;
