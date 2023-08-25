/** @type {import("prettier").Config} */
const config = {
    printWidth: 180,
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    bracketSameLine: true,
    arrowParens: 'avoid',
    singleAttributePerLine: true,

    plugins: [require.resolve('prettier-plugin-tailwindcss')]
};

module.exports = config;
