"use client";

import FormInput from "@/components/Forms/FormInput";
import FormSelectFields, { ISelectFieldOptions } from "@/components/Forms/FormSelectFields";
import Forms from "@/components/Forms/Forms";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useBuildingsQuery } from "@/redux/Api/buildingApi";
import { useAddRoomMutation } from "@/redux/Api/roomApi";
import { Button, Col, Row, message } from "antd";

const CreateRoomPage = () => {
  const [addRoom] = useAddRoomMutation();
  const { data, isLoading } = useBuildingsQuery({
    limit: 100,
    page: 1,
  });
  const buildings = data?.buildings;
  const buildingOptions = buildings?.map((building) => {
    return {
      label: building?.title,
      value: building?.id,
    };
  });

  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      // console.log(data);
      const res = await addRoom(data).unwrap();
      if (res?.id) {
        message.success("Room created successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "room", link: `/${base}/room` },
        ]}
      />
      <h1>Create Room</h1>
      <Forms submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="roomNumber" label="Room No." size="large" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="floor" label="Floor" size="large" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectFields
                size="large"
                name="buildingId"
                options={buildingOptions as ISelectFieldOptions[]}
                label="Building"
                placeholder="Select"
              />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Forms>
    </div>
  );
};

export default CreateRoomPage;
