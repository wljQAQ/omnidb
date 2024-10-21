import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { TypedDocumentString } from './graphql/gql/graphql';

export function useGraphQLQuery<TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables>,
  variables?: TVariables,
  options?: Omit<UseQueryOptions<TResult, Error, TResult>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: [document, variables],
    queryFn: async () => execute<TResult, TVariables>(document, variables),
    ...options
  });
}

export async function execute<TResult, TVariables>(query: TypedDocumentString<TResult, TVariables>, variables?: TVariables) {
  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json'
    },
    body: JSON.stringify({
      query: query,
      variables
    })
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();

  if (result.errors) {
    // 如果有错误，抛出第一个错误
    throw new Error(result.errors[0].message);
  }

  // 返回 result.data，而不是整个 result
  return result.data as TResult;
}
