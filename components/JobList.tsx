import { FC } from 'react';
import JobItem from './JobItem';
import type { Job } from 'lib/jobs.interfaces';

const JobList: FC<{ jobs: Job[] }> = ({ jobs }) => {
  return (
    <ul className="w-11/12 mx-auto py-6 space-y-14">
      {jobs.map((job) => (
        <JobItem job={job} key={job.id}/>
      ))}
    </ul>
  );
};

export default JobList;
