module.exports = {
    extends: 'airbnb',
    env: {
        jest: true
    },
    rules: {
        indent: ['error', 4],
        // 'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],

        // these don't need to be errors
        'max-len': ['warn', 120],
        'react/require-default-props': 'warn',
        'react/forbid-prop-types': 'warn',
        'react/prefer-stateless-function': 'warn',

        // Quieting a couple of rules that I don't think need to be errors
        'comma-dangle': 'off',
        'no-else-return': 'off',
        'react/jsx-filename-extension': 'off',
        'react/no-multi-comp': 'off',
        'react/require-default-props': 'warn',
        'no-prototype-builtins': 'off',

        // These rules can conflict with Prettier, which I use for formatting
        'arrow-parens': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-wrap-multilines': 'off',
        'arrow-body-style': 'off',
        'react/jsx-indent': 'off'
    }
};
