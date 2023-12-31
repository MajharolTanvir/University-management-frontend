'use client'
import FormInput from "@/components/Forms/FormInput";
import Forms from "@/components/Forms/Forms";
import { changePasswordSchema } from "@/schemas/changePassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import React from "react";

const ResetPassword = () => {

    const onSubmit = async (data: any) => {
      try {
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
  
  return (
    <div>
      <h1>Reset password</h1>
      <div>
        <Forms
          submitHandler={onSubmit}
          resolver={yupResolver(changePasswordSchema)}
        >
          <div
            style={{
              paddingTop: "15px",
              marginBottom: "10px",
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="oldPassword"
                  size="large"
                  label="Old password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="newPassword"
                  size="large"
                  label="New password"
                />
              </Col>
            </Row>
          </div>

          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Forms>
      </div>
    </div>
  );
};

export default ResetPassword;
