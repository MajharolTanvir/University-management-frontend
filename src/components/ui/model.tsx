"use client";
import React from "react";
import { Button, Modal, Space } from "antd";

type ModelPageProps = {
  children: React.ReactNode;
  data: { title: string; id: string };
  deleteHandler: (id: string) => void;
};

const ModelPage = ({ children, data, deleteHandler }: ModelPageProps) => {
  return (
    <>
      <Space>
        <Button
          danger
          type="primary"
          onClick={() => {
            Modal.confirm({
              title: "Are you sure you want to delete?",
              content: data.title,
              onOk: () => deleteHandler(data?.id),
              onCancel: () => {},
            });
          }}
        >
          {children}
        </Button>
      </Space>
    </>
  );
};

export default ModelPage;
function setOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
