"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import { SidebarItems } from "@/constant/sidebarItems";
import { USER_ROLE } from "@/constant/role";
import "./custom-menu.css";
import "./custom-sider.css";
import { getUserInfo } from "@/services/auth.services";

const { Sider } = Layout;

const { role } = getUserInfo() as any;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
        background: "#201d48",
      }}
    >
      {!collapsed && (
        <div
          style={{
            color: "white",
            fontSize: "1.5rem",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          PH-University
        </div>
      )}

      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SidebarItems(role)}
        style={{
          color: "white",
          background: "#201d48",
        }}
      />
    </Sider>
  );
};

export default Sidebar;
