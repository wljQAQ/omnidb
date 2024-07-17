import { Layout } from "antd";

const { Header, Content, Sider } = Layout;

export default function index() {
  return (
    <Layout className="h-full">
      <Sider theme="light">
        <div className="p-3 border-b border-gray-100">
          <img className="w-14" src="../../assets/logo.png" alt="" />
        </div>
      </Sider>

      <Layout>
        <Header className="bg-white">header</Header>
        <Content>content</Content>
      </Layout>
    </Layout>
  );
}
