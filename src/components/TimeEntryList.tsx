import React from "react";
import { TimeEntry } from "../hooks/useTimeEntries";
import { TimeEntryView } from "./TimeEntryView";

interface Props {
  timeEntries: TimeEntry[];
}

export const TimeEntryList: React.FunctionComponent<Props> = ({
  timeEntries,
}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {timeEntries.map((timeEntry) => (
          <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
        ))}
      </ul>
    </div>
  );
};
