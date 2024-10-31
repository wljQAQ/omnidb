import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

export interface MenuItemExtra {
  onRename?: (key: string, newName: string) => void;
  onCopy?: (key: string) => void;
  onDelete?: (key: string) => void;
} 