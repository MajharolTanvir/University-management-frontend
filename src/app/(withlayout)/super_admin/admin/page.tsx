import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div>
      <ActionBar title="Admin list">
        <Link href="/super_admin/admin/create-admin">
          <Button>Create admin</Button>
        </Link>
      </ActionBar>

      
    </div>
  );
};

export default Admin;
