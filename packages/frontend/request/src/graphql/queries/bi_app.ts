import { graphql } from '../gql';

export const FIND_BI_APP_WITH_TABLES = graphql(`
  query FIND_BI_APP_WITH_TABLES($id: String!) {
    findBiAppWithTables(id: $id) {
      id
      name
      tables {
        id
        name
      }
    }
  }
`);
