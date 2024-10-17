/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateBiAppInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBiTableInput = {
  biAppId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Find_Bi_App_With_TablesQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type Find_Bi_App_With_TablesQuery = { __typename?: 'Query', findBiAppWithTables: { __typename?: 'BiApp', id: string, name: string, tables: Array<{ __typename?: 'BiTable', id: string, name: string }> } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const Find_Bi_App_With_TablesDocument = new TypedDocumentString(`
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
    `) as unknown as TypedDocumentString<Find_Bi_App_With_TablesQuery, Find_Bi_App_With_TablesQueryVariables>;