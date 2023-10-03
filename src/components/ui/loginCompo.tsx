"use client";

import { Button, Col, Row } from "antd";
import loginImage from "../../assets/Login.gif";
import Image from "next/image";
import Forms from "@/components/Forms/Forms";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/Api/AuthApi";
import { storeUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";

type FromValues = {
  id: string;
  password: string;
};

const LoginCompo = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FromValues> = async (data: FromValues) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        router.push("/profile");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row style={{ minHeight: "100vh", color: "white", background: "#1a183f" }} justify="center" align="middle">
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

export default LoginCompo;
