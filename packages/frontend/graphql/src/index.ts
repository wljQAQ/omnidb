import request from 'graphql-request';

export * from './gql';

export * from './queries/user';

export function graphqlRequest(query: any) {
  request('https://localhost:3000/graphql', query);
}
