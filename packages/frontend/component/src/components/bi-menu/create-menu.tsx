/**
 * 新建菜单
 */

import React from 'react';

import { AppstoreOutlined, DownOutlined, MailOutlined, MoreOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Divider, Dropdown, Menu } from 'antd';

import { useToggle } from 'ahooks';

import { cn } from '../../utils';

type MenuItem = Required<MenuProps>['items'][number];

const items = [
  {
    key: 'data-table',
    label: '数据表',
    icon: <MailOutlined />,
    extra: <PlusOutlined />
  },
  {
    key: 'sync-data',
    label: '从其他数据源同步',
    icon: <MailOutlined />,
    extra: <PlusOutlined />
  }
];

export function CreateMenu() {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
  };

  const [open, { toggle }] = useToggle(true);

  return (
    <div className="pb-2">
      <Divider className="my-3" />
      <div className="cursor-pointer px-4 pb-2 text-gray-500 flex-between" onClick={toggle}>
        新建
        <DownOutlined className={cn('transition-all', open ? 'rotate-180' : 'rotate-0')} />
      </div>

      {/* 选项 */}
      <div className={cn('overflow-hidden px-2 transition-all', open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0')}>
        {items.map(item => (
          <div className="hover:bg-hover flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors">
            {item.icon}
            <span className="w-full flex-1 flex-between">
              {item.label}
              <span className="text-right text-gray-500">{item.extra}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
