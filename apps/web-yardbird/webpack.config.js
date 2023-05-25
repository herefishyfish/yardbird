const webpack = require('webpack');

require('dotenv').config();

module.exports = async (config) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        firebase: JSON.stringify({
          projectId: 'yardbird-application',
          appId: process.env.WEB_FIREBASE_APP_ID,
          storageBucket: 'yardbird-application.appspot.com',
          apiKey: process.env.WEB_FIREBASE_API_KEY,
          authDomain: 'yardbird-application.firebaseapp.com',
          messagingSenderId: process.env.WEB_FIREBASE_MESSAGING_SENDER_ID,
          measurementId: process.env.WEB_FIREBASE_MEASUREMENT_ID,
        }),
      },
    })
  );

  const keys = Object.keys(process.env).filter((key) =>
    key.startsWith('WEB_') || key.startsWith('SHARED_')
  );
  config.plugins.push(new webpack.EnvironmentPlugin(keys));

  return config;
};
