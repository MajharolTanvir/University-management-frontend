import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageFaculty = () => {
  return (
    <div>
      <ActionBar title="Faculty list">
        <Link href="/super_admin/manage-faculty/create-faculty">
          <Button>Create faculty</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageFaculty;
