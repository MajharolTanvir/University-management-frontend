import { Col, Row } from 'antd';
import React from 'react';
import FormInput from '../Forms/FormInput';
import FormTextArea from '../Forms/FormTextArea';

const StudentGuardianInfoForm = () => {
    return (
      <div
        style={{
          border: "1px solid #ffffff",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Basic information
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="student.guardian.fatherName"
              size="large"
              label="Father name"
            />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="student.guardian.fatherOccupation"
              size="large"
              label="Father occupation"
            />
          </Col>

          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="student.guardian.fatherContactNo"
              size="large"
              label="Father contact no"
            />
          </Col>

          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="student.guardian.motherName"
              size="large"
              label="Mother name"
            />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="student.guardian.motherOccupation"
              size="large"
              label="Mother occupation"
            />
          </Col>

          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="student.guardian.motherContactNo"
              size="large"
              label="Mother contact no"
            />
                </Col>
                
          <Col
            className="gutter-row"
            span={12}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormTextArea
              name="student.guardian.address"
              label="Address"
              rows={4}
            />
          </Col>
        </Row>
      </div>
    );
};

export default StudentGuardianInfoForm;