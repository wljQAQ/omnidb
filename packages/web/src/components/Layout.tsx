import { projects } from '@/mock';
import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Layout, Modal, Tree } from 'antd';

const { Header, Content, Sider } = Layout;

console.log('🚀 ~ projects:', projects);
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
    <Layout className="h-full" hasSider>
      <Sider className="border-r border-gray-200" theme="light">
        <div className="flex h-16 items-center border-b border-gray-200 px-4">
          <img className="w-14" src="../../assets/logo.png" alt="" />
        </div>

        <div className="py-1">
          <Button className="w-full" type="text" icon={<PlusOutlined />} onClick={() => Modal.info(newProjectModal)}>
            新建项目
          </Button>
        </div>

        <Tree treeData={projects} fieldNames={{ key: 'id' }} blockNode={true}></Tree>
      </Sider>

      <Layout>
        <Header className="border-b border-gray-200 bg-white">header</Header>
        <Content className="bg-white">
          <div className="p-5">
            <div className="px-4 py-5">
              <div className="text-lg font-bold">
                <PlusOutlined />
              </div>
              <div>新的 表格</div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
