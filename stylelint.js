module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order', 'stylelint-prettier/recommended'],
    rules: {
        'prettier/prettier': true,
        'selector-class-pattern': null,
        'no-descending-specificity': null,
        'custom-property-pattern': null,
        'selector-no-vendor-prefix': null,
        'property-no-vendor-prefix': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'color-function-notation': 'legacy',
        'color-hex-length': 'long',
        'declaration-property-value-no-unknown': null,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'value',
                    'variable',
                    'each',
                    'tailwind',
                    'apply',
                    'layer',
                    'variants',
                    'responsive',
                    'screen',
                ],
            },
        ],
        'media-query-no-invalid': null,
    },
};
