import { Layout ,Button} from "antd";
import { PlusOutlined } from "@ant-design/icons";


const { Header, Content, Sider } = Layout;

export default function index() {
  return (
    <Layout className="h-full" hasSider>
      <Sider theme="light">
        <div className="flex items-center border-b border-gray-50 h-16 px-4">
          <img className="w-14" src="../../assets/logo.png" alt="" />
        </div>

        <div className="py-1 border-gray-50 border-b">
        <Button className="w-full" type="text"  icon={<PlusOutlined />}>
          新建项目
    </Button>
        </div>
      </Sider>

      <Layout>
        <Header className="bg-white">header</Header>
        <Content>content</Content>
      </Layout>
    </Layout>
  );
}
