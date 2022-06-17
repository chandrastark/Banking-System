import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ1mBaZMDPe8kXeI4tVeNt8XbNiFzBcvY",
  authDomain: "banking-72495.firebaseapp.com",
  projectId: "banking-72495",
  storageBucket: "banking-72495.appspot.com",
  messagingSenderId: "344164508462",
  appId: "1:344164508462:web:0c728129c84275e7ce90bf",
  measurementId: "G-GETVBFQGXN"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export const addUser = ([name, email, accountno, balance]) => {
  return db
    .collection("users")
    .add({ name: name, email:email, accountno: accountno, balance: balance });
};

export const addTransaction = ( receiver, sender, amount) => {
  return db
    .collection("transactions")
    .add({ receiver: receiver, sender: sender, amount: amount, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
};

export const transact = (id1, balance1, id2, balance2, amount) => {
  return [db.collection("users").doc(id1).update({
    balance: Number(balance1) - Number(amount)
  }),
  db.collection("users").doc(id2).update({
    balance: Number(balance2) + Number(amount)
  })]

}

export { db };
  //firebase.initializeApp(firebaseConfig);
  //export default firebase