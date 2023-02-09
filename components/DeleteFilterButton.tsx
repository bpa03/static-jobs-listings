import { FC, SVGProps, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

const DeleteIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} {...props}>
    <path
      fill="#FFF"
      fillRule="evenodd"
      d="m11.314 0 2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
    />
  </svg>
);

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

const DeleteButtonFilter: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      className="rounded-md overflow-hidden max-w-fit origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: .3 }}
      layout
    >
      <div className="flex flex-row items-center">
        <span className="text-primary bg-light-200 py-1.5 px-2.5 inline-block">
          {children ? children : 'Frontend'}
        </span>
        <button
          className="bg-primary py-2.5 px-2.5 min-w-fit hover:bg-dark-200 transition-colors"
          {...rest}
        >
          <DeleteIcon />
        </button>
      </div>
    </motion.div>
  );
};

export default DeleteButtonFilter;
