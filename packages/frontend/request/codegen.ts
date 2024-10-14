import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../../backend/server/src/schema.gql',
  overwrite: true,
  documents: ['./src/**/*.ts'], // 修改这一行
  generates: {
    './src/graphql/gql/': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;
