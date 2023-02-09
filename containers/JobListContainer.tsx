import { FC } from 'react';
import JobList from 'components/JobList';
import { Job } from 'lib/jobs.interfaces';

interface JobListContainerProps {
  jobs: Job[]
}

const JobListContainer: FC<JobListContainerProps> = ({ jobs }) => {
  return (
    <JobList jobs={jobs} />
  )
}

export default JobListContainer;
