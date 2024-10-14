import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

export * from './gql';

export * from './queries/bi_app';

export function graphqlRequest(query: any) {
  const res = useQuery({
    queryKey: ['films'],
    queryFn: async () => {
      return request('http://localhost:3000/graphql', query);
    }
  });
  console.log(res, 'data');
}
