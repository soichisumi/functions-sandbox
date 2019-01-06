const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.HttpFunc = functions.https.onRequest((request, response) => {
    console.log(`req: ${JSON.stringify(request.body)}`)
    response.send("Hello from Firebase!");
});

exports.CallableFunc = functions.https.onCall((data, context) => {
    console.log(`req: ${JSON.stringify(data)}`)
    return {data: JSON.stringify(data)}
});

exports.PubSubFunc = functions.pubsub.topic('topic-name').onPublish((message) => {
    console.log(`msg: ${message}`)
    return {msg: JSON.stringify(message)}
});

exports.updateUser = functions.firestore
    .document('users/{userId}')
    .onUpdate((change, context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      const newValue = change.after.data();

      // ...or the previous value before this update
      const previousValue = change.before.data();

      console.log(`change.`);
      console.log(`prev: ${JSON.stringify(previousValue)}`);
      console.log(`new: ${JSON.stringify(newValue)}`);
});