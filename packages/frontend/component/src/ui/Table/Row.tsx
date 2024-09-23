import { forwardRef, ReactNode } from 'react';

type RowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  children?: ReactNode;
};

export const Row = forwardRef<HTMLTableRowElement, RowProps>((props, ref) => {
  return <tr ref={ref} className="hover:bg-header flex" {...props}></tr>;
});
