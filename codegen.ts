import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://rickandmortyapi.com/graphql',
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/services/rickandmorty/generated/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql'
      }
    },
    './src/services/rickandmorty/generated/types.ts': {
      plugins: ['typescript', 'typescript-operations']
    }
  }
};

export default config;
