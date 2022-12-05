import { FC } from 'react';
import DeleteButtonFilter from './DeleteFilterButton';
import ClearFilterButton from './ClearFilterButton';

const Filter: FC = () => {
  return (
    <div className="w-11/12 mx-auto bg-white rounded-md -mt-8 shadow-md py-5 pl-5 pr-6 flex flex-row items-center justify-between gap-4">
      <div className="flex flex-row gap-4 flex-wrap flex-1">
        <DeleteButtonFilter>Javascript</DeleteButtonFilter>
        <DeleteButtonFilter>CSS</DeleteButtonFilter>
        <DeleteButtonFilter>CSS</DeleteButtonFilter>
      </div>
      <div>
        <ClearFilterButton />
      </div>
    </div>
  );
};

export default Filter;
