import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-primary">
      <div className="bg-no-repeat bg-center bg-cover h-36 bg-[url(/images/bg-header-mobile.svg)] md:bg-[url(/images/bg-header-desktop.svg)]" />
    </header>
  );
};

export default Header;
