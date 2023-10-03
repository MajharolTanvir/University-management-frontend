import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { removeUserInfo } from "@/services/auth.services";
import { authKey } from "@/constant/storageKey";

const { Header } = Layout;

const Headers = () => {
  const router = useRouter();
  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logout} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <Header
      style={{
        background: "#1a183f",
        borderBottom: "2px solid #201d48",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar
                style={{
                  background: "#201d48",
                  borderColor: "#fff",
                }}
                size="large"
                icon={<UserOutlined />}
              ></Avatar>
            </Space>
          </a>
        </Dropdown>
      </Row>
    </Header>
  );
};

export default Headers;
