import React from "react";
import {
    Button,
    Col,
    Form,
    Input,
    message,
    Row,
    Space,
    DatePicker,
    Card,
} from "antd";

const { TextArea } = Input;

export default function AddTeacher() {
    const [form] = Form.useForm();

    const onFinish = () => {
        message.success("Submit success!");
    };

    const onFinishFailed = () => {
        message.error("Submit failed!");
    };

    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className="site-card-wrapper">
                    <Row gutter={[16, 16]}>
                        <Col sm={24} md={24} lg={24}>
                            <Card title="Basic information" bordered={true} bodyStyle={{paddingBottom: 0}}
                            >
                                <Row gutter={16}>
                                    <Col sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"firstName"}
                                            label="First name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter first name",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"lastName"}
                                            label="Last name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter last name",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Islam" />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="phoneNumber"
                                            label="Phone Number"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your phone number!",
                                                    type: "number",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="8801709696264"
                                                style={{
                                                    width: "100%",
                                                }}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="dateOfBirth"
                                            label="Date of birth"
                                            rules={[
                                                {
                                                    type: "object",
                                                    required: true,
                                                    message:
                                                        "Please select birth date!",
                                                },
                                            ]}
                                        >
                                            <DatePicker
                                                className="w-full"
                                                placeholder="2000-12-13"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"fathersName"}
                                            label="Father's name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Kawser Islam" />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"mothersName"}
                                            label="Mother's name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Morium Begum" />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"email"}
                                            label="Email address"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    type: "email",
                                                    message:
                                                        "Please enter a valid email",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="md.rabul@gmail.com" />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="joiningDate"
                                            label="Date of joining"
                                            rules={[
                                                {
                                                    type: "object",
                                                    required: true,
                                                    message:
                                                        "Please select birth date!",
                                                },
                                            ]}
                                        >
                                            <DatePicker
                                                className="w-full"
                                                placeholder={"2022-12-07"}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name="presentAddress"
                                            label="Present Address"
                                            rules={[
                                                {
                                                    type: "string",
                                                    required: true,
                                                    message:
                                                        "Please enter present address!",
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                style={{
                                                    height: 50,
                                                }}
                                                placeholder="can resize"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name="permanentAddress"
                                            label="Permanent Address"
                                            rules={[
                                                {
                                                    type: "string",
                                                    required: true,
                                                    message:
                                                        "Please enter permanent address!",
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                style={{
                                                    height: 50,
                                                }}
                                                placeholder="can resize"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Card title="Bank information" bordered={true} bodyStyle={{paddingBottom: 0}}>
                                <Row gutter={16}>
                                    <Col sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name={"bankAccountName"}
                                            label="Bank account name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter bank account name",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>

                                    <Col sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name={"bankAccountNumber"}
                                            label="Bank account no"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter bank account no",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>

                                    <Col sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name={"bankName"}
                                            label="Bank name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter bank name",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name={"bankBranchName"}
                                            label="Bank branch name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter bank branch name",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Card title="Documents" bordered={true} bodyStyle={{paddingBottom: 0}}>
                                <Row gutter={16}>


                                    <Col sm={24} md={24} lg={24}>
                                        <Form.Item
                                            name={"joiningLetterURL"}
                                            label="Joining letter url"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter bank account no",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>

                                    <Col sm={24} md={24} lg={24}>
                                        <Form.Item
                                            name={"othersDocumentURL"}
                                            label="Others document url"
                                            tooltip="This is a required field"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter others document url",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    
                    </Row>
                </div>
            </Form>
        </div>
    );
}
