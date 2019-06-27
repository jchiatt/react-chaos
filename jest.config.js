module.exports = {
  "collectCoverage": true,
  "coverageDirectory": "coverage",
  "verbose": true,
  "testRegex": "(/test/.*|\\.(test|spec))\\.jsx?$",
  "moduleFileExtensions": ["js", "json", "jsx", "node"],
  setupFilesAfterEnv: ['./rtl.setup.js']
}