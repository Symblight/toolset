module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  roots: ['./__tests__'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '<rootDir>/__tests__/**/*.(ts|js)?(x)',
    '<rootDir>/__tests__/**/?(*.)(spec|test).(ts|js)?(x)',
  ],
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      window: {
        config: {
          apiUrl: '',
        },
      },
    },
  },
}
