"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAdminQuery } from "@/redux/Api/admin";
import React from "react";

type IDProps = {
  params: any;
};

const AdminUpdatePage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useAdminQuery(id);
  console.log(data);
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "Super_admin",
            link: "/super_admin",
          },
          {
            label: "Department",
            link: "/super_admin/admin",
          },
        ]}
      />
      <ActionBar title="Update Admin Data"></ActionBar>
    </div>
  );
};

export default AdminUpdatePage;
