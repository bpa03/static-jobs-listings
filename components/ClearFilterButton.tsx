import { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ClearFilterButton: FC<ButtonProps> = (props) => {
  return (
    <button
      className="text-dark-100 hover:text-dark-200 transition-colors duration-300"
      aria-label="Clear all job filters"
      {...props}
    >
      Clear
    </button>
  );
};

export default ClearFilterButton;
