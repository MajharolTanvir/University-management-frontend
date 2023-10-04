import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const DepartmentPage = () => {
  return (
    <div>
      <ActionBar title="Department list">
        <Link href="/super_admin/department/create-department">
          <Button>Create department</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default DepartmentPage;
