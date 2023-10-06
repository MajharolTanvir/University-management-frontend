"use client";
import { Content } from "antd/es/layout/layout";
import Headers from "./Headers";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{ minHeight: "100vh", color: "white", background: "#1a183f", padding: "0px 10px"  }}
    >
      <Headers />
      {children}
    </Content>
  );
};

export default Contents;
