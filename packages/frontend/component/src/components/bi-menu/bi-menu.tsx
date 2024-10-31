import React, { ReactElement, useRef } from 'react';

import { AppstoreOutlined, MailOutlined, MoreOutlined, SettingOutlined } from '@ant-design/icons';
import type { InputRef, MenuProps } from 'antd';
import { Button, Dropdown, Input, Menu } from 'antd';

import { useClickAway, useToggle } from 'ahooks';

import { CreateMenu } from './create-menu';

type MenuItem = Required<MenuProps>['items'][number];

const MenuExtraButton = () => {
  const items: MenuProps['items'] = [
    {
      key: 'rename',
      label: '重命名'
    },
    {
      key: 'copy',
      label: '复制'
    },
    {
      type: 'divider'
    },
    {
      key: 'delete',
      label: '删除'
    }
  ];
  return (
    <Dropdown menu={{ items }} trigger={['click']} className="hover:!text-blue-700">
      <MoreOutlined />
    </Dropdown>
  );
};

const Label = ({ label, defaultEdit = false }: { label: string; defaultEdit?: boolean }) => {
  const [edit, { toggle, setLeft }] = useToggle(defaultEdit);

  const ref = useRef<HTMLSpanElement>(null);
  useClickAway(() => {
    setLeft();
  }, ref);

  return (
    <div className="w-full" onDoubleClick={toggle}>
      {edit ? (
        <span ref={ref}>
          <Input className="w-full" defaultValue={label} autoFocus />
        </span>
      ) : (
        label
      )}
    </div>
  );
};

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: <Label label="1111" />,
    icon: <MailOutlined />,
    extra: <MenuExtraButton />
  }
];

export function BIMenu() {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <Menu
        className="overflow-y-auto"
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />

      <CreateMenu />
    </div>
  );
}
