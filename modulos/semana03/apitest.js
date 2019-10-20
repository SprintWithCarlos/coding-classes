/* eslint-disable global-require */
const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run(
  {
    collection: require('./restapi.postman_collection.json'),
    reporters: 'cli',
    environment: require('./restapi.postman_environment.json'),
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log('collection run complete!');
  },
);
