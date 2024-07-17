module.exports= {
  "semi": true,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "trailingComma": "none",
  "bracketSpacing": true,
  "singleQuote": true,
  "printWidth": 140,
  "plugins": ["prettier-plugin-tailwindcss","@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    'react', // React itself
    '<THIRD_PARTY_MODULES>', // node_modules
    '^(cplibrary|cpicons|cputil|cpclient|@cpclient|cpshots).*$', // Workspace packages
    'components/.*$', // React Components
    '^(constants|data|hooks|util|utils)/.*$', // Various helpers
    '^(\\.|\\.\\.)/(.(?!.(css|scss)))*$', // Any local imports that AREN'T styles.
    '\\.(css|scss)$' // Styles
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true
}
