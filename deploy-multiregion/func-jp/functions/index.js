const functions = require('firebase-functions');

exports.helloWorld = functions.region("asia-northeast1").https.onCall((data, ctx) => {
 return {
     res: JSON.stringify(data),
     region: "asia-northeast1"
 }
});
