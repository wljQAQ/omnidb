import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Layout, Modal, Tree } from 'antd';

import { BIMenu } from '@omnidb/component/bi-menu';
import { BITable } from '@omnidb/component/bi-table';
import { GET_USER, graphqlRequest } from '@omnidb/graphql';

import { useParams } from 'react-router-dom';

console.log(GET_USER, 111);

graphqlRequest(GET_USER);

// const response = await fetch('https://localhost:3000/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/graphql-response+json'
//   },
//   body: JSON.stringify({
//     query: GET_USER
//   })
// });

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
