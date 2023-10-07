"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAdminQuery } from "@/redux/Api/admin";
import { Col, Image, Row } from "antd";
import React from "react";

type IDProps = {
  params: any;
};

const AdminDetailsPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useAdminQuery(id);
  console.log(data);
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "Super_admin",
            link: "/super_admin",
          },
          {
            label: "Admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <ActionBar title="Admin Details"> </ActionBar>
      <div>
        <Row
          justify="center"
          align='middle'
          gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
        >
          <Col
            className="gutter-row"
            span={12}
            style={{
              marginBottom: "10px",
            }}
          >
            <Image
              src={data?.profileImage}
              alt="Admin image"
              style={{
                width: "100%",
              }}
              width={500}
              height={500}
            />
          </Col>
          <Col
            className="gutter-row"
            span={12}
            style={{
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
                <h2>Academic Id: {data?.id}</h2>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <h2>
                  First Name:{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {data?.name?.firstName}
                  </span>{" "}
                </h2>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <h2>
                  Middle Name:{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {data?.name?.middleName}
                  </span>{" "}
                </h2>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <h2>
                  Last Name:{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {data?.name?.lastName}
                  </span>{" "}
                </h2>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>Date of Birth:</span>{" "}
                  {data?.dateOfBirth}
                </p>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>Contact no:</span>{" "}
                  {data?.contactNo}
                </p>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Emergency contact no:
                  </span>{" "}
                  {data?.emergencyContactNo}
                </p>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>Blood Group:</span>{" "}
                  {data?.bloodGroup}
                </p>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>Designation:</span>{" "}
                  {data?.designation}
                </p>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                  {data?.email}
                </p>
              </Col>

              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>Gender:</span>{" "}
                  {data?.gender}
                </p>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Management department:
                  </span>{" "}
                  {data?.managementDepartment?.title}
                </p>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>PresentAddress:</span>{" "}
                  {data?.presentAddress}
                </p>
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>Permanent Address:</span>{" "}
                  {data?.permanentAddress}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdminDetailsPage;
