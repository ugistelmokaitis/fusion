module.exports = {
    plugins: ['stylelint-prettier'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-idiomatic-order',
        'stylelint-config-prettier',
    ],
    rules: {
        'prettier/prettier': true,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'responsive',
                    'layer',
                    'variants',
                    'tailwind',
                    'screen',
                    'apply',
                ],
            },
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
        'declaration-block-no-redundant-longhand-properties': [
            true,
            {
                ignoreShorthands: ['/flex/'],
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
    },
};
