import { useState, useCallback } from 'react';
import { MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { MenuLabel } from '../components/menu-label';
import { MenuExtraButton } from '../components/menu-extra-button';
import { MenuItem } from '../types';

export function useMenuItems() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      key: 'sub1',
      label: <MenuLabel label="1111" />,
      icon: <MailOutlined />,
      extra: <MenuExtraButton />
    }
  ]);

  const handleMenuClick: MenuProps['onClick'] = useCallback((e) => {
    console.log('click ', e);
  }, []);

  const updateMenuItem = useCallback((key: string, newLabel: string) => {
    setMenuItems(prev => 
      prev.map(item => 
        item.key === key 
          ? { ...item, label: <MenuLabel label={newLabel} /> }
          : item
      )
    );
  }, []);

  return {
    items: menuItems,
    handleMenuClick,
    updateMenuItem
  };
} 