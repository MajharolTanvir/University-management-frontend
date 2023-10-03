"use client";
import { Content } from "antd/es/layout/layout";
import UMBreadCrumb from "./UMBreadCrumb";
import Headers from "./Headers";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{ minHeight: "100vh", color: "white", background: "#1a183f", padding: "0px 10px"  }}
    >
      <Headers />
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `student`,
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
