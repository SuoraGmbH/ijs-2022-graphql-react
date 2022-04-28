import { gql } from "@apollo/client";
import { useAllTimeEntriesQuery } from "../generated/graphql";

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

type UseTimeEntriesReturnValue = {
  timeEntries: TimeEntry[],
  logTime: (newTimeEntry: NewTimeEntry) => void
}

const useTimeEntries = (): UseTimeEntriesReturnValue => {
  const { data, error } = useAllTimeEntriesQuery();

  if (error) {
    throw error;
  }

  const timeEntriesWithAnyDate = data?.timeEntries ?? []

  const timeEntries = timeEntriesWithAnyDate.map(timeEntry => ({
    ...timeEntry,
    start: new Date(timeEntry.start),
    end: new Date(timeEntry.end),
  }))

  return {
    timeEntries: timeEntries,
    logTime: (timeEntry: NewTimeEntry): void => {
      console.log("log time entry", timeEntry);
    },
  };
};

export default useTimeEntries;
