module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Test only TypeScript files, not also any generated .js.
  testMatch: [
    // Wildcards are in https://github.com/micromatch/micromatch format.
    '**/?(*.)test.ts',
  ],
};
