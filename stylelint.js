module.exports = {
    plugins: ['stylelint-prettier'],
    extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order', 'stylelint-config-prettier'],
    rules: {
        'prettier/prettier': true,
        'selector-class-pattern': null,
        'no-descending-specificity': null,
        'custom-property-pattern': null,
        'selector-no-vendor-prefix': null,
        'property-no-vendor-prefix': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'color-function-notation': 'legacy',
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['responsive', 'value', 'variable', 'each'],
            },
        ],
        'media-query-no-invalid': null,
    },
};
