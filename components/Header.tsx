import { FC } from 'react';
import Filter from './Filter';

const Header: FC = () => {
  return (
    <header className="relative">
      <div className="bg-primary bg-no-repeat bg-center bg-cover h-36 bg-[url(/images/bg-header-mobile.svg)] md:bg-[url(/images/bg-header-desktop.svg)]" />
      <Filter />
    </header>
  );
};

export default Header;
