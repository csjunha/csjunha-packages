module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    env: {
        node: true,
        es6: true,
        worker: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['jest', '@typescript-eslint'],
    rules: {
        indent: 'off',
        quotes: ['warn', 'single'],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
        },
    ],
};
