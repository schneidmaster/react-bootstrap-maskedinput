module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/src/**/*.js"],
  transform: {
    "^.+\\.js?$": "babel-jest",
  },
};
