import { useEffect } from 'react';

import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Layout, Modal, Tree } from 'antd';

import { BIMenu } from '@omnidb/component/bi-menu';
import { BITable } from '@omnidb/component/bi-table';
import { FIND_BI_APP_WITH_TABLES, ReactQueryProvider, useGraphQLQuery } from '@omnidb/request';

import { useParams } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

export default function index() {
  const { bitableId } = useParams();
  const { data, error } = useGraphQLQuery(FIND_BI_APP_WITH_TABLES, { id: 'cm2bnnwr000009go1kw9qnwwm' });
  console.log('🚀 ~ index ~ data11222221:', data);
  return (
    <Layout className="h-full">
      <Header className="border-b border-gray-200 bg-white">{data?.findBiAppWithTables.name}</Header>

      <Layout>
        <Sider className="border-r border-gray-200" theme="light">
          <BIMenu></BIMenu>
        </Sider>
        <Content className="bg-white p-5">
          <BITable></BITable>
        </Content>
      </Layout>
    </Layout>
  );
}
