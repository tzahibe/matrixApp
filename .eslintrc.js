module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    es6: true
  },
  rules: {
    'keyword-spacing': 2,
    'import-spacing': 'off' // Disable spacing check for import statements
  },
  prettier: [
    'error',
    {},
    {
      fileInfoOptions: {
        withNodeModules: true
      }
    }
  ],
  'prettier.bracketSpacing': false
};