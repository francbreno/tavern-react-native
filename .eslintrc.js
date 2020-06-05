module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': ['react', 'react-hooks', 'prettier'],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': ['error', 'single', { avoidEscape: true }],
        'no-empty-function': 'off',
        'prettier/prettier': 'error',
        'semi': [
            'error',
            'always'
        ]
    }
};