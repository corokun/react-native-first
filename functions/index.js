const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const UUID = require('uuid-v4');

const gcconfig = {
  projectId: 'rn-course-1552961879445',
  keyFilename: 'rncourse.json',
};

const gcs = require('@google-cloud/storage')(gcconfig);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.storeImage = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const body = JSON.parse(req.body);
    fs.writeFileSync('/tmp/uploaded-image.jpg', body.image, 'base64', err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
    const bucket = gcs.bucket('rn-course-1552961879445.appspot.com');

    const uuid = UUID();

    bucket.upload('/tmp/uploaded-image.jpg', {
      uploadType: 'media',
      destination: `/places/${uuid}.jpg`,
      meta: {
        contentType: 'image/jpeg',
        firebaseStorageDownloadTokens: uuid,
      },
    });
  });

  res.send('Hello from Firebase!');
});
