import { graphql } from '../gql';

export const GET_USER = graphql(`
  query GetUser {
    test1 {
      id
      email
      name
    }
  }
`);

export const CREATE_USER = graphql(`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(createUserInput: $input) {
      id
      email
      name
    }
  }
`);
