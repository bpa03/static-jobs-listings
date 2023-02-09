import { FC } from 'react';
import Image from 'next/image';
import { Job } from 'lib/jobs.interfaces';

const BallSeparator: FC = () => (
  <span className="w-1 h-1 bg-dark-100 block rounded-full" />
);

const Featured: FC = () => (
  <span className="text-white text-sm uppercase bg-dark-200 font-bold px-2.5 py-[2px] rounded-3xl inline-block select-none">
    Featured
  </span>
);

const New: FC = () => (
  <span className="text-white text-sm uppercase bg-primary font-bold px-2.5 py-[2px] rounded-3xl inline-block select-none">
    New!
  </span>
);

const CardIndicator: FC = () => (
  <span className="absolute top-0 left-0 bottom-0 bg-primary w-1 rounded-bl-md rounded-tl-md"/>
)

interface JobItemProps {
  onClickFilter: (filter: string) => void;
  job: Job;
}

const JobItem: FC<JobItemProps> = ({ job, onClickFilter }) => {
  const technologies: string[] = [...job.tools, ...job.languages];

  return (
    <li className="w-full bg-white shadow-md rounded-md pl-8 pr-6 pb-4 pt-10 relative">
      {job.featured ? <CardIndicator /> : null}
      <div className="absolute -top-8">
        <div className="relative w-16 h-16">
          <Image src={job.logo} alt={job.company + '.jpg'} fill />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex flex-row items-center space-x-6">
          <h2 className="text-lg text-primary font-bold">
            {job.company}
          </h2>
          <div className="space-x-2.5">
            {job.new ? <New /> : null}
            {job.featured ? <Featured /> : null}
          </div>
        </div>
        <p className="text-dark-200 font-bold">{job.position}</p>
        <div className="flex flex-row space-x-3 items-center">
          <span className="text-dark-100 text-base">
            {job.postedAt}
          </span>
          <BallSeparator />
          <span className="text-dark-100 text-base">
            {job.contract}
          </span>
          <BallSeparator />
          <span className="text-dark-100 text-base">
            {job.location}
          </span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-200 my-4" />
      <div className="flex gap-x-2 gap-y-3 flex-wrap">
        {technologies.map((tool, index) => (
          <button
            key={tool + index}
            onClick={() => onClickFilter(tool)}
            className="text-primary font-bold py-1 px-2 bg-light-100 rounded-md hover:text-light-200 hover:bg-primary transition-colors"
          >
            {tool}
          </button>
        ))}
      </div>
    </li>
  );
};

export default JobItem;
