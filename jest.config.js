module.exports = {
  "collectCoverage": true,
  "coverageDirectory": "coverage",
  "verbose": true,
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.jsx?$",
  "moduleFileExtensions": ["js", "json", "jsx", "node"],
  "coverageThreshold": {
    "global": {
      "branches": 30,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  setupFilesAfterEnv: ['./rtl.setup.js']
}