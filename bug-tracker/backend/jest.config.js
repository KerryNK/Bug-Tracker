module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/app.js',
    '!src/middleware/errorHandler.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
};