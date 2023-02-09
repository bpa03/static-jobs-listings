import { FC } from 'react';
import DeleteButtonFilter from './DeleteFilterButton';
import ClearFilterButton from './ClearFilterButton';

interface HeaderProps {
  filters: string[];
}

const Header: FC<HeaderProps> = ({ filters }) => {
  return (
    <header className="relative">
      <div className="bg-primary bg-no-repeat bg-center bg-cover h-36 bg-[url(/images/bg-header-mobile.svg)] md:bg-[url(/images/bg-header-desktop.svg)]" />
      <div className="w-11/12 mx-auto bg-white rounded-md -mt-8 shadow-md py-5 pl-5 pr-6 flex flex-row items-center justify-between gap-4">
        <div className="flex flex-row gap-4 flex-wrap flex-1">
          {filters.map((filter) => (
            <DeleteButtonFilter key={filter}>
              {filter}
            </DeleteButtonFilter>
          ))}
        </div>
        <div>
          <ClearFilterButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
