import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTimeEntry: TimeEntry;
};


export type MutationAddTimeEntryArgs = {
  comment: Scalars['String'];
  end: Scalars['Date'];
  projectId: Scalars['String'];
  start: Scalars['Date'];
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  timeEntriesConnection?: Maybe<ProjectTimeEntriesConnection>;
};

export type ProjectTimeEntriesConnection = {
  __typename?: 'ProjectTimeEntriesConnection';
  edges: Array<ProjectTimeEntriesEdge>;
};

export type ProjectTimeEntriesEdge = {
  __typename?: 'ProjectTimeEntriesEdge';
  node: TimeEntry;
};

export type Query = {
  __typename?: 'Query';
  project?: Maybe<Project>;
  projects: Array<Project>;
  searchProjects: Array<Project>;
  timeEntries: Array<TimeEntry>;
  timeEntry?: Maybe<TimeEntry>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QuerySearchProjectsArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryTimeEntryArgs = {
  id: Scalars['ID'];
};

export type TimeEntry = {
  __typename?: 'TimeEntry';
  comment: Scalars['String'];
  end: Scalars['Date'];
  id: Scalars['ID'];
  project: Project;
  start: Scalars['Date'];
};

export type LondonCallingMutationVariables = Exact<{
  comment: Scalars['String'];
  projectId: Scalars['String'];
  start: Scalars['Date'];
  end: Scalars['Date'];
}>;


export type LondonCallingMutation = { __typename?: 'Mutation', addTimeEntry: { __typename?: 'TimeEntry', id: string, comment: string, project: { __typename?: 'Project', name: string } } };

export type LondonCalling2MutationVariables = Exact<{
  comment: Scalars['String'];
  projectId: Scalars['String'];
  start: Scalars['Date'];
  end: Scalars['Date'];
}>;


export type LondonCalling2Mutation = { __typename?: 'Mutation', addTimeEntry: { __typename?: 'TimeEntry', id: string, comment: string, project: { __typename?: 'Project', name: string } } };

export type AllTimeEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTimeEntriesQuery = { __typename?: 'Query', timeEntries: Array<{ __typename?: 'TimeEntry', id: string, comment: string, start: any, end: any }> };

export type LogTimeMutationVariables = Exact<{
  comment: Scalars['String'];
  projectId: Scalars['String'];
  start: Scalars['Date'];
  end: Scalars['Date'];
}>;


export type LogTimeMutation = { __typename?: 'Mutation', addTimeEntry: { __typename?: 'TimeEntry', id: string, comment: string, project: { __typename?: 'Project', name: string } } };


export const LondonCallingDocument = gql`
    mutation LondonCalling($comment: String!, $projectId: String!, $start: Date!, $end: Date!) {
  addTimeEntry(comment: $comment, projectId: $projectId, start: $start, end: $end) {
    id
    comment
    project {
      name
    }
  }
}
    `;
export type LondonCallingMutationFn = Apollo.MutationFunction<LondonCallingMutation, LondonCallingMutationVariables>;

/**
 * __useLondonCallingMutation__
 *
 * To run a mutation, you first call `useLondonCallingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLondonCallingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [londonCallingMutation, { data, loading, error }] = useLondonCallingMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      projectId: // value for 'projectId'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useLondonCallingMutation(baseOptions?: Apollo.MutationHookOptions<LondonCallingMutation, LondonCallingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LondonCallingMutation, LondonCallingMutationVariables>(LondonCallingDocument, options);
      }
export type LondonCallingMutationHookResult = ReturnType<typeof useLondonCallingMutation>;
export type LondonCallingMutationResult = Apollo.MutationResult<LondonCallingMutation>;
export type LondonCallingMutationOptions = Apollo.BaseMutationOptions<LondonCallingMutation, LondonCallingMutationVariables>;
export const LondonCalling2Document = gql`
    mutation LondonCalling2($comment: String!, $projectId: String!, $start: Date!, $end: Date!) {
  addTimeEntry(comment: $comment, projectId: $projectId, start: $start, end: $end) {
    id
    comment
    project {
      name
    }
  }
}
    `;
export type LondonCalling2MutationFn = Apollo.MutationFunction<LondonCalling2Mutation, LondonCalling2MutationVariables>;

/**
 * __useLondonCalling2Mutation__
 *
 * To run a mutation, you first call `useLondonCalling2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLondonCalling2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [londonCalling2Mutation, { data, loading, error }] = useLondonCalling2Mutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      projectId: // value for 'projectId'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useLondonCalling2Mutation(baseOptions?: Apollo.MutationHookOptions<LondonCalling2Mutation, LondonCalling2MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LondonCalling2Mutation, LondonCalling2MutationVariables>(LondonCalling2Document, options);
      }
export type LondonCalling2MutationHookResult = ReturnType<typeof useLondonCalling2Mutation>;
export type LondonCalling2MutationResult = Apollo.MutationResult<LondonCalling2Mutation>;
export type LondonCalling2MutationOptions = Apollo.BaseMutationOptions<LondonCalling2Mutation, LondonCalling2MutationVariables>;
export const AllTimeEntriesDocument = gql`
    query AllTimeEntries {
  timeEntries {
    id
    comment
    start
    end
  }
}
    `;

/**
 * __useAllTimeEntriesQuery__
 *
 * To run a query within a React component, call `useAllTimeEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTimeEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTimeEntriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTimeEntriesQuery(baseOptions?: Apollo.QueryHookOptions<AllTimeEntriesQuery, AllTimeEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTimeEntriesQuery, AllTimeEntriesQueryVariables>(AllTimeEntriesDocument, options);
      }
export function useAllTimeEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTimeEntriesQuery, AllTimeEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTimeEntriesQuery, AllTimeEntriesQueryVariables>(AllTimeEntriesDocument, options);
        }
export type AllTimeEntriesQueryHookResult = ReturnType<typeof useAllTimeEntriesQuery>;
export type AllTimeEntriesLazyQueryHookResult = ReturnType<typeof useAllTimeEntriesLazyQuery>;
export type AllTimeEntriesQueryResult = Apollo.QueryResult<AllTimeEntriesQuery, AllTimeEntriesQueryVariables>;
export const LogTimeDocument = gql`
    mutation LogTime($comment: String!, $projectId: String!, $start: Date!, $end: Date!) {
  addTimeEntry(comment: $comment, projectId: $projectId, start: $start, end: $end) {
    id
    comment
    project {
      name
    }
  }
}
    `;
export type LogTimeMutationFn = Apollo.MutationFunction<LogTimeMutation, LogTimeMutationVariables>;

/**
 * __useLogTimeMutation__
 *
 * To run a mutation, you first call `useLogTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logTimeMutation, { data, loading, error }] = useLogTimeMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      projectId: // value for 'projectId'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useLogTimeMutation(baseOptions?: Apollo.MutationHookOptions<LogTimeMutation, LogTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogTimeMutation, LogTimeMutationVariables>(LogTimeDocument, options);
      }
export type LogTimeMutationHookResult = ReturnType<typeof useLogTimeMutation>;
export type LogTimeMutationResult = Apollo.MutationResult<LogTimeMutation>;
export type LogTimeMutationOptions = Apollo.BaseMutationOptions<LogTimeMutation, LogTimeMutationVariables>;