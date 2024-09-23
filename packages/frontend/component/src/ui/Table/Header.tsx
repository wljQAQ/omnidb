import { forwardRef, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLTableSectionElement> {}

export const Header = forwardRef<HTMLTableSectionElement, Props>((props, ref) => {
  return <thead ref={ref} className="sticky top-0 z-10 grid select-none " {...props}></thead>;
});
