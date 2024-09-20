import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Layout, Modal, Tree } from 'antd';

import { projects } from '@/mock';

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
  return (
    <Layout className="h-full">
      <Header className="border-b border-gray-200 bg-white">header</Header>

      <Layout>
        <Sider className="border-r border-gray-200" theme="light">
          <Tree treeData={projects} fieldNames={{ key: 'id' }} blockNode={true}></Tree>
        </Sider>
        <Content className="bg-white p-5">
          <Card hoverable className="w-52 cursor-pointer" size="small" title="新建表格">
            新的 表格
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}
