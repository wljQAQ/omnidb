import React from 'react';

import { MoreOutlined } from '@ant-design/icons';
import { Dropdown, type MenuProps } from 'antd';

const menuItems: MenuProps['items'] = [
  { key: 'rename', label: '重命名' },
  { key: 'copy', label: '复制' },
  { type: 'divider' },
  { key: 'delete', label: '删除' }
];

export const MenuExtraButton = () => (
  <Dropdown menu={{ items: menuItems }} trigger={['click']} className="hover:!text-blue-700">
    <MoreOutlined />
  </Dropdown>
);
