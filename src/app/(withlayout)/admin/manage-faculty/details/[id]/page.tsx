"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useFacultyQuery } from "@/redux/Api/facultyApi";
import { Col, Image, Row } from "antd";
import React from "react";

type IDProps = {
  params: any;
};

const FacultyDetailsPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useFacultyQuery(id);
    const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-faculty", link: `/${base}/manage-faculty` },
        ]}
      />
      <ActionBar title="Faculty Details"> </ActionBar>
      <div>
        <Row
          justify="center"
          align="middle"
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
              alt="Faculty image"
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
                <h2>Academic Id: {data?.facultyId}</h2>
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
                    {data?.firstName}
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
                    {data?.middleName}
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
                  <span style={{ fontWeight: "normal" }}>{data?.lastName}</span>{" "}
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
                    Academic department:
                  </span>{" "}
                  {data?.academicDepartment?.title}
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
                  <span style={{ fontWeight: "bold" }}>Academic Faculty:</span>{" "}
                  {data?.academicFaculty?.title}
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
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FacultyDetailsPage;
