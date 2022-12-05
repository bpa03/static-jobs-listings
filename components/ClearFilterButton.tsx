import { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ClearFilterButton: FC = () => {
  return (
    <button className="text-dark-100 hover:text-dark-200 transition-colors duration-300">
      Clear
    </button>
  );
};

export default ClearFilterButton;
