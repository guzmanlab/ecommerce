/** @type {import("eslint").Linter.Config} */
const config = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'import', '@typescript-eslint'],
    extends: [
        'next',
        'airbnb',
        'prettier',
        'airbnb-typescript',
        'next/core-web-vitals',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked'
    ],
    rules: {
        // These opinionated rules are enabled in stylistic-type-checked above.
        // Feel free to reconfigure them to your own preference.
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',

        'arrow-body-style': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'never'],

        '@typescript-eslint/no-use-before-define': ['off', { typedefs: false }],

        'no-void': ['off', { allowAsStatement: true }],
        '@typescript-eslint/no-void': ['off', { allowAsStatement: true }],

        'react/button-has-type': ['off', { allowAsStatement: true }],
        'react/function-component-definition': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',

        '@typescript-eslint/consistent-type-imports': [
            'off',
            {
                prefer: 'type-imports',
                fixStyle: 'inline-type-imports'
            }
        ],
        '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],

        indent: ['off', 4],
        '@typescript-eslint/indent': ['off', 4],

        semi: ['off', 'never'],
        '@typescript-eslint/semi': ['off', 'never']
    },
    settings: {
        react: {
            detect: 'latest'
        }
    }
};

module.exports = config;
