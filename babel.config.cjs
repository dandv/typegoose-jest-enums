module.exports = {
  plugins: [
    // Enable Jest to parse .test.ts files through Babel
    'babel-plugin-transform-typescript',
    // Because Jest doesn't quite support native ES modules - https://github.com/facebook/jest/issues/9430
    '@babel/plugin-transform-modules-commonjs',
    // For Jest - Babel equivalents for experimentalDecorators and emitDecoratorMetadata
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'babel-plugin-transform-typescript-metadata',
  ],
};

// import syntaxObjectRestSpread from "babel-plugin-syntax-object-rest-spread";
