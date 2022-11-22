import { FC } from 'react';
import Image from 'next/image';
import type { Job } from 'lib/jobs.interfaces';

const BallSeparator: FC = () => (
  <span className="w-1 h-1 bg-dark-100 block rounded-full" />
);

const JobList: FC<{ jobs: Job[] }> = ({ jobs }) => {
  const firstJob = jobs[0];
  const technologies: string[] = [...firstJob.tools, ...firstJob.languages];

  return (
    <ul className="w-11/12 mx-auto py-6">
      <li className="w-full bg-white rounded-md pl-8 pr-6 pb-4 pt-10 relative">
        <div className="absolute -top-8">
          <div className="relative w-16 h-16">
            <Image
              src={firstJob.logo}
              alt={firstJob.company + '.jpg'}
              fill
            />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-primary">{firstJob.company}</h2>
          <p className="text-dark-200 font-bold">
            {firstJob.position}
          </p>
          <div className="flex flex-row space-x-3 items-center">
            <span className="text-dark-100 text-base">
              {firstJob.postedAt}
            </span>
            <BallSeparator />
            <span className="text-dark-100 text-base">
              {firstJob.contract}
            </span>
            <BallSeparator />
            <span className="text-dark-100 text-base">
              {firstJob.location}
            </span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-200 my-4" />
        <div className="flex space-x-2">
          {technologies.map((tool, index) => (
            <span key={tool + index} className="text-primary font-bold py-1 px-2 bg-light-100 rounded-md">{tool}</span>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default JobList;
