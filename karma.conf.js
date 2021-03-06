module.exports = function(config){
  config.set({
    basePath : './front/',

    files : [
      'libs/libs.js',
      'scripts/**/*.js',
      'test/unit/**/*.js',
    ],

    exclude : [
      // 'app/lib/angular/angular-loader.js',
      // 'app/lib/angular/*.min.js',
      // 'app/lib/angular/angular-scenario.js'
      'scripts/common.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
