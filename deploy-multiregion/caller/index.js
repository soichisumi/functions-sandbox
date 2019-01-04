const firebase = require('firebase');

require("firebase/functions");

// any apikey required. because deployed functions dont require authentication.
var config = {
    projectId: "your_projectID",
};
firebase.initializeApp(config);

const functions = firebase.app().functions("us-central1"); //functions("asia-northeast1");

async function callfuncs(){
    const res = await functions.httpsCallable("helloWorld")({data: "data"});
    console.log(`res: ${JSON.stringify(res)}`);
    return res;
}

callfuncs()