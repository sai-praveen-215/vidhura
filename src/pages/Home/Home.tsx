import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { AiOutlineHome } from "react-icons/ai";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GiFarmTractor } from "react-icons/gi";
import Styles from "./Home.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { MdPeopleAlt } from "react-icons/md";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import BottamBarPage from "../BottamBarPage/BottamBarPage";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import HomePage from "../HomePage/HomePage";
function Home() {
  const [responcive, setResponcive] = useState<any>(false);
  const [collapsed, setCollapsed] = useState(false);
  const onbreakpoint = (breake: any) => {
    setResponcive(breake);
  };
  const siderItems: any = [
    {
      key: "/",
      label: "Home",
      icon: <AiOutlineHome />,
      className: Styles.menu_item,
    },
    {
      key: "/bills",
      label: "Bills",
      icon: <AiOutlineHome />,
      className: Styles.menu_item,
    },

    {
      key: "/tractors",
      label: "Tractors",
      icon: <GiFarmTractor />,
      className: Styles.menu_item,
    },
    {
      key: "/labor",
      label: "Labor",
      icon: <MdPeopleAlt />,
      className: Styles.menu_item,
    },
    {
      key: "/fieldinformation",
      label: "Field Information",
      icon: "",
      className: Styles.menu_item,
    },
    {
      key: "/payments",
      label: "Payments",
      icon: <FaIndianRupeeSign />,
      className: Styles.menu_item,
    },
  ];

  const navigate = useNavigate();

  return (
    <Layout
      style={{
        maxWidth: "2000px",
        backgroundColor: "white",
        margin: "auto",
        height: "100vh",
      }}
    >
      <Header />
      <Layout>
        <Sider
          className={Styles.siderMenu}
          onBreakpoint={onbreakpoint}
          breakpoint="md"
          collapsedWidth={responcive ? 0 : undefined}
          width={200}
          collapsible
          trigger={null}
          collapsed={collapsed}
          style={
            responcive || location?.pathname?.includes("/collection/preview")
              ? { display: "none" }
              : { background: "colorBgContainer" }
          }
        >
          <Menu
            mode="inline"
            theme="dark"
            onClick={({ key }: any) => {
              navigate(key);
            }}
            selectedKeys={[location.pathname]}
            items={siderItems}
            // style={{ height: "100%", backgroundColor: "", color: "" }}
            className={Styles.menu_item}
          />
        </Sider>

        <Layout>
          {!responcive && (
            <div
              style={{
                padding: 0,
                background: "colorBgContainer",
                position: "fixed",
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 44,
                  height: 44,
                }}
              />
            </div>
          )}
          <Content style={{ padding: "24px", overflow: "auto" }}>
            <Outlet />
            {location.pathname === "/" && <HomePage />}
          </Content>
          {responcive ? <BottamBarPage /> : ""}
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;
