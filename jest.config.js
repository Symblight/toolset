module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  roots: ['./src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(ts|js)?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).(ts|js)?(x)',
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
