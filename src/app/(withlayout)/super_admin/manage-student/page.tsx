import ActionBar from '@/components/ui/ActionBar';
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const ManageStudent = () => {
    return (
      <div>
        <ActionBar title="Student list">
          <Link href="/super_admin/manage-student/create-student">
            <Button>Create student</Button>
          </Link>
        </ActionBar>
      </div>
    );
};

export default ManageStudent;