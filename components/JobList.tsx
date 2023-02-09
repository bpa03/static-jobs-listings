import { FC } from 'react';
import JobItem from './JobItem';
import type { Job } from 'lib/jobs.interfaces';

interface JobListProps {
  onClickTechnologyFilter: (filter: string) => void;
  jobs: Job[];
}

const JobList: FC<JobListProps> = ({ jobs, onClickTechnologyFilter }) => {
  return (
    <ul className="w-11/12 mx-auto py-6 space-y-14">
      {jobs.map((job) => (
        <JobItem
          job={job}
          key={job.id}
          onClickFilter={onClickTechnologyFilter}
        />
      ))}
    </ul>
  );
};

export default JobList;
