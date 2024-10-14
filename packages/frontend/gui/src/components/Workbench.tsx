import { useEffect } from 'react';

import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Layout, Modal, Tree } from 'antd';

import { BIMenu } from '@omnidb/component/bi-menu';
import { BITable } from '@omnidb/component/bi-table';
import { GET_BI_APP, graphqlRequest, ReactQueryProvider } from '@omnidb/request';

import { useParams } from 'react-router-dom';

console.log(GET_BI_APP, 111);

const { Header, Content, Sider } = Layout;
const newProjectModal = {
  title: 'Use Hook!',
  content: (
    <>
      <div>这是一个modal</div>
    </>
  )
};

export default function index() {
  const { bitableId } = useParams();
  graphqlRequest(GET_BI_APP);
  console.log(bitableId, useParams());
  return (
    <Layout className="h-full">
      <Header className="border-b border-gray-200 bg-white">header</Header>

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
