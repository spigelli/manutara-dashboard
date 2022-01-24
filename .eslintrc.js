module.exports = {
  ignorePatterns: [
    'node_modules/',
    '**.js',
    'config/',
    'scripts/',
  ],
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended'
  ],
  rules: {
    'jsx-a11y/anchor-is-valid': 'warn',
    'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'func-names': 'off',
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "parser": "typescript"
      }
    ],
    "max-len": "off",
  },
  overrides: [
    {
      files: ['*'],
      rules: {
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'import/prefer-default-export': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/forbid-prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-return-assign': 'off',
        'react/no-unescaped-entities': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-useless-escape': 'off',
        'react/no-unused-prop-types': 'off',
        'comma-dangle': ["off", "never"],
        "@typescript-eslint/comma-dangle": ["off", "only-multiline"],

      },
    },
    {
      files: [
        'src/types/*.ts',
      ],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
    {
      files: [
        '**/*.stories.*',
      ],
      rules: {
        'import/absolute-path': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-default-export': 'error',
      },
    },
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    filepathIgnorePatterns: [
      'node_modules',
    ],
  },
};
