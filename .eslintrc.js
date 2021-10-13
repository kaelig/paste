const path = require('path');
const cachedPackages = require('./tools/.cache/packages.json');

const tsconfigPath = path.resolve(__dirname, './tsconfig.eslint.json');

console.log({tsconfigPath});
// Based on https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: [
        '**/*.tsx',
        '**/*.ts',
        '**/*.stories.ts',
        '**/*.stories.ts',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
      parserOptions: {
        project: [tsconfigPath],
      },
      rules: {
        '@typescript-eslint/dot-notation': 2,
        '@typescript-eslint/no-implied-eval': 2,
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: true,
            variables: true,
            typedefs: true,
          },
        ],
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-shadow': ['error', {ignoreFunctionTypeParameterNameValueShadow: true}],
        '@typescript-eslint/no-var-requires': 'off',
        // Warn about incorrect type imports
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/no-throw-literal': 2,
      },
    },
  ],
  plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'promise', 'unicorn', 'emotion'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    '**/*.md',
    '**/*.d.ts',
    '**/**/build.js',
    '**/dist/**',
    '**/**/package.json',
    '**/**/.eslintrc.js',
    '**/**/tsconfig.json',
    '**/**/tsconfig.eslint.json',
  ],
  rules: {
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/no-implied-eval': 0,
    '@typescript-eslint/no-throw-literal': 0,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    'react/jsx-filename-extension': 'off',
    // Doesnt really work in our use-cases: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',
    // Clashes with @typescript-eslint/parser
    'no-use-before-define': 0,
    'comma-dangle': 'off',
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    // We don't really have a style yet.  To be discussed
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    // weirdly specific
    'unicorn/import-style': 'off',
    // PropTypes are useless with typescript
    'react/prop-types': 'off',
    // ignore dev deps by default, point eslint to all package.json files in the monorepo
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [path.join(__dirname, './'), ...cachedPackages.map((package) => package.location)],
      },
    ],
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-props-no-spreading': 0,
    'no-useless-constructor': 'off',
    eqeqeq: ['error', 'smart'],
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'array-callback-return': ['error', {allowImplicit: true}],
    // deprecated rule
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either',
        depth: 3,
      },
    ],
    // We don't use jasmine and this clashes with danger js
    'jest/no-jasmine-globals': 'off',
  },
};
