const functions = require('firebase-functions');

exports.helloWorld = functions.region("us-central1").https.onCall((data, ctx) => {
    return {
        res: JSON.stringify(data),
        region: "us-central1"
    }
});
   