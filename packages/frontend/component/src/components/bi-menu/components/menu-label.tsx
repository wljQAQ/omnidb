import React, { useRef } from 'react';

import { Input } from 'antd';

import { useClickAway, useToggle } from 'ahooks';

interface MenuLabelProps {
  label: string;
  defaultEdit?: boolean;
  onLabelChange?: (value: string) => void;
}

export const MenuLabel: React.FC<MenuLabelProps> = ({ label, defaultEdit = false, onLabelChange }) => {
  const [edit, { toggle, setLeft }] = useToggle(defaultEdit);
  const ref = useRef<HTMLSpanElement>(null);

  useClickAway(() => {
    setLeft();
  }, ref);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLabelChange?.(e.target.value);
  };

  return (
    <div className="w-full" onDoubleClick={toggle}>
      {edit ? (
        <span ref={ref}>
          <Input className="w-full" defaultValue={label} autoFocus onChange={handleChange} />
        </span>
      ) : (
        label
      )}
    </div>
  );
};
