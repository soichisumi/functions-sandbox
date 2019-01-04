const functions = require('firebase-functions');

const helloa1 = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! - helloa1");
});

const helloa2 = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase! - helloa2");
});

exports.groupA = {
    Helloa1 : helloa1,
    Helloa2 : helloa2,
};