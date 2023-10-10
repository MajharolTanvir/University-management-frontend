"use client";
import FormInput from "@/components/Forms/FormInput";
import FormSelectFields, {
  ISelectFieldOptions,
} from "@/components/Forms/FormSelectFields";
import Forms from "@/components/Forms/Forms";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useBuildingQuery,
  useBuildingsQuery,
  useUpdateBuildingMutation,
} from "@/redux/Api/buildingApi";
import { useRoomQuery, useUpdateRoomMutation } from "@/redux/Api/roomApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

type IDProps = {
  params: any;
};

const EditRoom = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useRoomQuery(id);
  const [updateRoom] = useUpdateRoomMutation();
  const { data: buildingData } = useBuildingsQuery({
    limit: 100,
    page: 1,
  });
  console.log(data);
  const buildings = buildingData?.buildings;
  const buildingOptions = buildings?.map((building) => {
    return {
      label: building?.title,
      value: building?.id,
    };
  });

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.....");
    try {
      await updateRoom({ id, body: values });
      message.success("Room updated successfully");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "Room",
            link: "/admin/room",
          },
        ]}
      />

      <ActionBar title="Update room"></ActionBar>
      <Forms submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormInput
                name="roomNumber"
                label="Room No."
                size="large"
                defaultValue={data?.roomNumber}
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormInput
                name="floor"
                label="Floor"
                size="large"
                defaultValue={data?.floor}
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectFields
                size="large"
                name="buildingId"
                options={buildingOptions as ISelectFieldOptions[]}
                label="Building"
                placeholder="Select"
                defaultValue={data?.building.title}
              />
            </div>
          </Col>
        </Row>

        <Button htmlType="submit" type="primary">
          Update
        </Button>
      </Forms>
    </div>
  );
};

export default EditRoom;
