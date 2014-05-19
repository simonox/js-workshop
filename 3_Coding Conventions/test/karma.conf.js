module.exports = function(config) {
  config.set({
      basePath: ''
    , frameworks: ['mocha', 'chai' ]
    , files: [
          '../app/scripts/**.js',
          'spec/*.js'
      ]
    , exclude: []
    , reporters: [ 'progress' ]
    , port: 9876
    , colors: true
    , logLevel: config.LOG_INFO
    , autoWatch: false
    , browsers: [ 'PhantomJS' ]
    , captureTimeout: 60000
    , singleRun: true
  });

  switch (process.env.CHAI_TEST_ENV) {
    case 'sauce':
      require('./karma.sauce')(config);
      break;
    default:
      // ...
      break;
  };
};
