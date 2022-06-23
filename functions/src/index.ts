import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

export const createItem = functions.firestore
  .document('items/{itemId}')
  .onCreate((item, context) => {
    db.doc(`items/${item.id}`).set(
      {
        createdDTM: new Date(),
        id: item.id,
      },
      { merge: true }
    );
  });
