import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

export function graphqlRequest(query: any, variables: any) {
  console.log("🚀 ~ graphqlRequest ~ variables:", variables)
  const res = useQuery({
    queryKey: ['films'],
    queryFn: async () => {
      return request('http://localhost:3000/graphql', query, variables);
    }
  });
  console.log(res, 'data');
}
