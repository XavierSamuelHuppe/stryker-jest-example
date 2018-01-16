module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: "server/src/**/*.js",
        mutated: true,
        included: false
      },
      "server/test/**/*.js"
    ],
    testRunner: "jest",
    mutator: "javascript",
    transpilers: [],
    reporter: ["clear-text", "progress"],
    coverageAnalysis: "all",
    logLevel: 'debug',
    thresholds: { high: 90, low: 90, break: 90 }
  });
};
