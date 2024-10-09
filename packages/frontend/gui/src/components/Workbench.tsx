import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Layout, Modal, Tree } from 'antd';

import { BIMenu } from '@omnidb/component/bi-menu';
import { BITable } from '@omnidb/component/bi-table';
import { graphql } from '@omnidb/graphql';

import { useParams } from 'react-router-dom';

const PeopleCountQuery = graphql(`
  query test1 {
    id
  }
`);

const response = await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/graphql-response+json'
  },
  body: JSON.stringify({
    query: PeopleCountQuery
  })
});

console.log(PeopleCountQuery, 111);

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
