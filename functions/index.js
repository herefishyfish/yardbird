const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.createItem = functions.firestore
  .document("items/{itemId}")
  .onCreate((item, context) => {
    db.doc(`items/${item.id}`).set(
      {
        createdDTM: new Date(),
        id: item.id,
      },
      { merge: true }
    );
  });
