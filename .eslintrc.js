module.exports = {
    extends: 'airbnb',
    env: {
        jest: true
    },
    rules: {
        // // Overwriting indentation rules to be 4 spaces instead of 2
        // 'indent': ['error', 4],
        // 'react/jsx-indent': ['error', 4],
        // 'react/jsx-indent-props': ['error', 4],

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
        'react/jsx-indent': 'off',

        // These are all style rules that are errors in the airbnb config that result in too much noise in our current files
        // my preference would be to eventually move most of them back to errors
        'prefer-template': 'warn',
        semi: 'warn',
        'object-curly-spacing': 'warn',
        quotes: 'warn',
        'react/jsx-tag-spacing': 'warn',
        // 'react/jsx-indent': 'warn',
        'react/jsx-first-prop-new-line': 'warn',
        'react/self-closing-comp': 'warn',
        'jsx-quotes': 'warn',
        'no-trailing-spaces': 'warn',

        // I'd prefer if this was an error, but it's possible that there are edge cases right now that depend on some
        // weird behavior of == so I'm changing to a warning for now
        eqeqeq: 'warn',

        // unless a11y is a priority for us, it's probably fine to set these rules as warnings
        'jsx-a11y/no-static-element-interactions': 'warn'
    }
};
