import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

export * from './gql';

export * from './queries/user';

export function graphqlRequest(query: any) {
  const res = useQuery({
    queryKey: ['films'],
    queryFn: async () => {
      return request('http://localhost:3000/graphql', query);
    }
  });
  console.log(res, 'data');
}
