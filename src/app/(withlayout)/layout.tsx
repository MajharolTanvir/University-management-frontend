"use client";
import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/ui/Sidebar";
import Contents from "../../components/ui/Contents";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const [loading, setLoading] = useState<Boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    } else {
      setLoading(true);
    }
  }, [router, setLoading, userLoggedIn]);

  if (!loading) {
    return <p>Loading..........</p>;
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
