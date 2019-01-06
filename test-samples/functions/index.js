const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.HttpFunc = functions.https.onRequest((request, response) => {
    console.log(`req.body: ${JSON.stringify(request.body)}`)
    console.log(`functions.config: ${JSON.stringify(functions.config())}`)
    console.log(`req.query: ${JSON.stringify(request.query)}`)
    
    response.send(JSON.stringify({
        config: JSON.stringify(functions.config()),
        body: JSON.stringify(request.body),
        query: JSON.stringify(request.query)
    }));
});

exports.CallableFunc = functions.https.onCall((data, context) => {
    console.log(`req: ${JSON.stringify(data)}`)
    return {data: JSON.stringify(data)}
});

exports.PubSubFunc = functions.pubsub.topic('topic-name').onPublish((message) => {
    console.log(`msg: ${JSON.stringify(message)}`);
    return {msg: JSON.stringify(message)}; //返す意味はないが、サンプルなので
});

exports.FirestoreFunc = functions.firestore
    .document('users/{userId}')
    .onUpdate((change, context) => {
      const newValue = change.after.data();

      // ...or the previous value before this update
      const prevValue = change.before.data();

      console.log(`change.`);
      console.log(`prev: ${JSON.stringify(prevValue)}`);
      console.log(`new: ${JSON.stringify(newValue)}`);
      return change; //返す意味はないが、サンプルなので
});