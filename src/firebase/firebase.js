import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


















//CHILD REMOVED 
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapShot) => {
//     expenses.push({
//       id: childSnapShot.key,
//       ...childSnapShot.val()
//     })
//   })
//   console.log(expenses)
// })

// database.ref('nexpenses').push({
//   description: 'Rent',
//   amount: 100,
//   createdAt: 1000,
//   note: ''
// })

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// });

// database.ref().set({
//   name: 'Ryan',
//   age: 29,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'San Diego',
//     country: 'United States'
//   }
// }).then(data => {
//   console.log('Data has been saved') 
// }).catch(error => {
//   console.log(error)
// });

// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   })
//   .then()
//   .catch();


// database.ref('happy')
//   .remove()
//     .then(() => console.log('successfully removed'))
//     .catch(error => console.log(error));
