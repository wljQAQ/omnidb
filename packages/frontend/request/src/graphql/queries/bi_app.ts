import { graphql } from '../gql';

export const GET_BI_APP = graphql(`
  query GET_BI_APP {
    biApp {
      id
    }
  }
`);
