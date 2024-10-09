import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.gql',
  overwrite: true,
  documents: ['./src/**/*.ts', './src/**/*.tsx'], // 修改这一行
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;
