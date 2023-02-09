import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import DeleteButtonFilter from './DeleteFilterButton';
import ClearFilterButton from './ClearFilterButton';

interface HeaderProps {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
  onRemoveAllFilters: () => void;
}

const Header: FC<HeaderProps> = ({
  filters,
  onRemoveFilter,
  onRemoveAllFilters,
}) => {
  return (
    <header className="relative">
      <div className="bg-primary bg-no-repeat bg-center bg-cover h-36 bg-[url(/images/bg-header-mobile.svg)] md:bg-[url(/images/bg-header-desktop.svg)]" />
      <div className="container mx-auto">
        <div className="w-11/12 md:w-7/12 mx-auto bg-white rounded-md -mt-8 shadow-md py-5 pl-5 pr-6 flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row gap-4 flex-wrap flex-1">
            <AnimatePresence>
              {filters.map((filter) => (
                <DeleteButtonFilter
                  key={filter}
                  onClick={() => onRemoveFilter(filter)}
                >
                  {filter}
                </DeleteButtonFilter>
              ))}
            </AnimatePresence>
          </div>
          <div>
            <ClearFilterButton onClick={onRemoveAllFilters} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
