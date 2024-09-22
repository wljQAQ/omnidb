import { forwardRef, ReactNode } from 'react';

type RowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  children?: ReactNode;
};

export const Row = forwardRef<HTMLTableRowElement, RowProps>((props, ref) => {
  return <tr ref={ref} className="border-divider hover:bg-header flex w-full border-b" {...props}></tr>;
});
