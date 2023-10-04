"use client";
import { Layout, Row } from "antd";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/ui/Sidebar";
import Contents from "../../components/ui/Contents";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { Vortex } from "react-loader-spinner";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    } else {
      setLoading(true);
    }
  }, [router, setLoading, userLoggedIn]);

  if (!loading) {
    return (
      <Row
        align="middle"
        justify="center"
        style={{ minHeight: "100vh", background: "#1a183f" }}
      >
        <Vortex
          visible={true}
          height="100"
          width="100"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </Row>
    );
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
