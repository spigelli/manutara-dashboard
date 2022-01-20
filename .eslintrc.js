module.exports = {
  extends: ['eslint-config-react-app', 'airbnb', 'airbnb/hooks'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'warn',
  },
  overrides: [
    {
      files: ['*'],
      rules: {
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/forbid-prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-return-assign': 'off',
        'react/no-unescaped-entities': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-useless-escape': 'off',
        'react/no-unused-prop-types': 'off',
      },
    },
  ],
};
