import { Col, Row } from 'antd';
import React from 'react';
import FormInput from '../Forms/FormInput';
import FormDatePicker from '../Forms/FormDatePicker';
import FormSelectFields from '../Forms/FormSelectFields';
import { bloodGroupOptions } from '@/constant/global';
import FormTextArea from '../Forms/FormTextArea';

const StudentBasicInfoForm = () => {
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
              type="email"
              name="student.email"
              size="large"
              label="Email"
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
              type="number"
              name="student.contactNo"
              size="large"
              label="Contact no"
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
              type="number"
              name="student.emergencyContactNo"
              size="large"
              label="Emergency contact no"
            />
          </Col>
          <Col
            className="gutter-row"
            span={12}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormDatePicker
              label="Date of Birth"
              name="student.dateOfBirth"
              size="large"
            />
          </Col>
          <Col
            className="gutter-row"
            span={12}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectFields
              size="large"
              name="student.bloodGroup"
              options={bloodGroupOptions}
              placeholder="Select a Blood group"
              label="Blood group"
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
              name="student.presentAddress"
              label="Present address"
              rows={4}
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
              name="student.permanentAddress"
              label="Permanent address"
              rows={4}
            />
          </Col>
        </Row>
      </div>
    );
};

export default StudentBasicInfoForm;