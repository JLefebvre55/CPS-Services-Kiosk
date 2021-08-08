import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const helloWorld = functions.https.onCall(() => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  return "Hello from Firebase!";
});

export const getAllForms = functions.https.onCall(async () => {
  const forms = await admin.firestore().collection('forms').get();
  return forms.docs.map(form => {
    return form.data();
  });
});

// export const getUsers = functions.https.onRequest((request, response) => {
//   functions.logger.info(`User list request from ${request.ip}`, {structuredData: true});

//   // Get all users
//   return admin.auth().listUsers().then(users => {
//     // Parse each user - filter disabled, only return important data
//     response.send(users.users.filter(user => {
//       return !user.disabled;
//     }).map(user => {
//       return { uid: user.uid, name: user.displayName, email: user.email };
//     }));
//   });
// });