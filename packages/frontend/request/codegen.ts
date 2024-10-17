import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../../backend/server/src/schema.gql',
  overwrite: true,
  documents: ['./src/graphql/queries/*.ts'],
  generates: {
    './src/graphql/gql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
        strictScalars: true
      }
      // plugins: ['typescript', 'typescript-operations']
    }
  }
};

export default config;
