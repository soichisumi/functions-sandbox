// function内で Firestoreなど、他のFirebaseプロダクトを扱っている場合は
// その認証情報を与えて初期化する必要がある
// https://firebase.google.com/docs/functions/unit-testing#initializing
const test = require('firebase-functions-test')();
const mockData = {
    mocked: "mocked string"
};
test.mockConfig(mockData);

const chai = require("chai");
const assert = chai.assert;

const myFuncs = require('../index');

describe("Http function test sample", () => {
    it("Success", ()=> {
        // express の request, response オブジェクトをモックする
        const queryData = {p: "param p"};
        const bodyData = {data: "testdata"};
        const req = {
            query: queryData,
            body: bodyData
        };
        const res = {
            send: (data)=>{
                assert.strictEqual(JSON.stringify({
                    config: JSON.stringify(mockData),
                    body: JSON.stringify(bodyData),
                    query: JSON.stringify(queryData)
                }), data)
            }
        };

        myFuncs.HttpFunc(req, res);
    });
});

describe("Callable function test sample", () => {
    const wrapped = test.wrap(myFuncs.CallableFunc);
    it("Success", () => {
        // (data: object, ctx: CallableContext)を渡せばよい
        const data = {
            reqData: "testdata"
        };

        const res = wrapped(data); // 各種mockが行われた状態でonCall内の関数が呼ばれる
        assert.deepEqual(res, {data: JSON.stringify(data)});
    });
});

describe("Pub/Sub trigger function test sample", () => {
    const wrapped = test.wrap(myFuncs.PubSubFunc);
    it("Success", () => {
        const msg = {
            message: "hi. this is pubsub test sample."
        };
        // 必要なら オーバーライド したい EventContext のパラメータを指定する
        const ctx = {};

        const res = wrapped(msg, ctx); //普通はpubsub トリガからデータを返すことはないので、 pubsub関数による副作用が起きているかチェック
        assert.deepEqual(res, {msg: JSON.stringify(msg)});
    });
});

describe("Firestore trigger function test sample", () => {
    const wrapped = test.wrap(myFuncs.FirestoreFunc);
    it("Success", () => {
        const beforeSnap = test.firestore.makeDocumentSnapshot({foo: 'bar'}, 'document/path');
        const afterSnap = test.firestore.makeDocumentSnapshot({foo: 'faz'}, 'document/path');
        const change = test.makeChange(beforeSnap, afterSnap);

        const ctx = {};

        const res = wrapped(change, ctx);
        assert.deepEqual(res, change);
    });
});