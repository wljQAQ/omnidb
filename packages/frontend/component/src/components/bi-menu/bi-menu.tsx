import React from 'react';

import { AppstoreOutlined, MailOutlined, MoreOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function MenuExtraButton() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      )
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      )
    }
  ];
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <MoreOutlined />
    </Dropdown>
  );
}

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    extra: <MenuExtraButton />
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />
  },
  {
    type: 'divider'
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group'
  }
];

export function BIMenu() {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
  };

  return <Menu onClick={onClick} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" items={items} />;
}
