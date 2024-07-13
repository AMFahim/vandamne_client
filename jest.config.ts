import nextJs from 'next/jest';

const createJestConfig = nextJs({ dir: '.' });
/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default createJestConfig(customJestConfig);
