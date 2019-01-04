const functions = require('firebase-functions');

const hellob1 = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! - hellob1");
});

const hellob2 = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! - hellob2");
});

exports.groupB = {
    Hellob1 : hellob1,
    Hellob2 : hellob2,
};