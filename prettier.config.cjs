/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  tabWidth: 2,
  arrowParens: 'avoid',
  trailingComma: 'none',
  bracketSpacing: true,
  singleQuote: true,
  printWidth: 140,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '^(cplibrary|cpicons|cputil|cpclient|@cpclient|cpshots).*$',
    '',
    '^types$',
    '^@/**/(.*)$',
    '',
    '^[./]'
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss']
};
