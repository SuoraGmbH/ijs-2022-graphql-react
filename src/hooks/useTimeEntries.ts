import { gql } from "@apollo/client";
import {
  useAllTimeEntriesQuery,
  useLogTimeMutation,
} from "../generated/graphql";

gql`
  query AllTimeEntries {
    timeEntries {
      id
      comment
      start
      end
    }
  }
`;

gql`
  mutation LogTime(
    $comment: String!
    $projectId: String!
    $start: Date!
    $end: Date!
  ) {
    addTimeEntry(
      comment: $comment
      projectId: $projectId
      start: $start
      end: $end
    ) {
      id
      comment
      project {
        name
      }
    }
  }
`;

export interface TimeEntry {
  id: string;
  comment: string;
  start: Date;
  end: Date;
}

export interface NewTimeEntry {
  comment: string;
  start: Date;
  end: Date;
  projectId: string;
}

const useTimeEntries = () => {
  const { data, error } = useAllTimeEntriesQuery();
  const [logTime] = useLogTimeMutation();

  if (error) {
    throw error;
  }

  const timeEntriesWithAnyDate = data?.timeEntries ?? [];

  const timeEntries = timeEntriesWithAnyDate.map((timeEntry) => ({
    ...timeEntry,
    start: new Date(timeEntry.start),
    end: new Date(timeEntry.end),
  }));

  return {
    timeEntries: timeEntries,
    logTime: (timeEntry: NewTimeEntry): void => {
      logTime({
        variables: {
          comment: timeEntry.comment,
          projectId: timeEntry.projectId,
          start: timeEntry.start.toISOString(),
          end: timeEntry.end.toISOString(),
        },
      });
      // logTimeEntryMutation
      console.log("log time entry", timeEntry);
    },
  };
};

export default useTimeEntries;
