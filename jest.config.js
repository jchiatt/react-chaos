module.exports = {
  "collectCoverage": true,
  "coverageDirectory": "coverage",
  "verbose": true,
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.jsx?$",
  "moduleFileExtensions": ["js", "json", "jsx", "node"],
  setupFilesAfterEnv: ['./rtl.setup.js']
}