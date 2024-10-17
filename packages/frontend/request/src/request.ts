import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { request, RequestDocument } from 'graphql-request';

import { TypedDocumentString } from './graphql';

// export function useGraphQLQuery<TResult, TVariables>(
//   document: TypedDocumentString<TResult, TVariables>,
//   variables?: TVariables,
//   options?: Omit<UseQueryOptions<TResult, Error, TResult>, 'queryKey' | 'queryFn'>
// ) {
//   return useQuery({
//     queryKey: [document, variables],
//     queryFn: async () => request<TResult>('http://localhost:3000/graphql', document, variables || {}),
//     ...options
//   });
// }
export function useGraphQLQuery<TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables>,
  variables?: TVariables extends Record<string, never> ? [] : [TVariables],
  options?: Omit<UseQueryOptions<TResult, Error, TResult>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: [document, variables],
    queryFn: async () => execute<TResult, TVariables>(document, variables),
    ...options
  });
}

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables?: TVariables extends Record<string, never> ? [] : [TVariables]
) {
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

  return response.json() as TResult;
}
