"use client";

import { Button, Col, Row } from "antd";
import loginImage from "../../assets/Login.gif";
import Image from "next/image";
import Forms from "@/components/Forms/Forms";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/Api/AuthApi";

type FromValues = {
  id: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FromValues> = async (data: FromValues) => {
    try {
      const res = await userLogin({ ...data });
      console.log(res);
    } catch (error) {}
  };

  return (
    <Row style={{ minHeight: "100vh" }} justify="center" align="middle">
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={600} alt="Login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
            fontFamily: "cursive",
          }}
        >
          First login on your account
        </h1>
        <div>
          <Forms submitHandler={onSubmit}>
            <div>
              <FormInput type="text" size="large" name="id" label="User id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                type="password"
                size="large"
                name="password"
                label="User password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Forms>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
