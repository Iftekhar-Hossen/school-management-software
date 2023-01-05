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
    Modal,
} from "antd";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";

const { TextArea } = Input;

export default function AddStuff() {
    const [form] = Form.useForm();
    const { auth } = useSelector((auth) => auth);
    const [data, setData] = useState(null);

    const onFinish = (values) => {
        axios
            .post(
                `http://${window.location.hostname}:8000/v1/auth/add-admin`,
                {
                    ...values,
                    role: "teacher",
                    dateOfBirth: values.dateOfBirth.$d,
                    joiningDate: values.dateOfBirth.$d,
                },
                {
                    headers: {
                        token: auth.token,
                    },
                },
            )
            .then((res) => {
                console.log(res);
                setData(res.data.data);
                alert(
                    `You can login with phone number: ${res.data.data.phoneNumber} or administratorId: ${res.data.data.administratorId}`,
                );
            })
            .catch((error) => {
                console.log(error);
            });
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
                <div>
                    <Row gutter={[16, 16]} justify="center">
                        <Col sm={24} md={24} lg={24}>
                            <PageTitle title="Add Stuff" />
                        </Col>
                        <Col sm={24} md={24} lg={24}>
                            <Card
                                title="Basic information"
                                bordered={true}
                                bodyStyle={{ paddingBottom: 0 }}
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
                                                },
                                                {
                                                    pattern:
                                                        /^(?:\88|01)?\d{11}$/,
                                                    message:
                                                        "The input must be a valid phone number (e.g. 123-456-7890)",
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
                                            tooltip="This is a required field"
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
                                            name="joiningDate"
                                            label="Date of joining"
                                            tooltip="This is a required field"
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
                                            tooltip="This is a required field"
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
                                            tooltip="This is a required field"
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
                            <Card
                                title="Bank information"
                                bordered={true}
                                bodyStyle={{ paddingBottom: 0 }}
                            >
                                <Row gutter={16}>
                                    <Col sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name={"bankAccountName"}
                                            label="Bank account name"
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>

                                    <Col sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name={"bankAccountNumber"}
                                            label="Bank account no"
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>

                                    <Col sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name={"bankName"}
                                            label="Bank name"
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name={"bankBranchName"}
                                            label="Bank branch name"
                                            tooltip="This is a required field"
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Card
                                title="Documents"
                                bordered={true}
                                bodyStyle={{ paddingBottom: 0 }}
                            >
                                <Row gutter={16}>
                                    <Col sm={24} md={24} lg={24}>
                                        <Form.Item
                                            name={"joiningLetterURL"}
                                            label="Joining letter url"
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>

                                    <Col sm={24} md={24} lg={24}>
                                        <Form.Item
                                            name={"othersDocumentURL"}
                                            label="Others document url"
                                            tooltip="This is a required field"
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Card
                                title="Authentication"
                                bordered={true}
                                bodyStyle={{ paddingBottom: 0 }}
                            >
                                <Row gutter={16}>
                                    <Col sm={24} md={24} lg={24}>
                                        <Form.Item
                                            name={"email"}
                                            label="Email Address"
                                            tooltip="This is not a required field."
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={24} lg={24}>
                                        <Form.Item
                                            name={"password"}
                                            label="Password"
                                            tooltip="This is a required field."
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    type: "string",
                                                    message:
                                                        "Password is required",
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="password"
                                                placeholder="Md. Rabul"
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col sm={24} md={24} lg={24}>
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                className="bg-[#1677ff]"
                                                htmlType="submit"
                                            >
                                                Save Data
                                            </Button>
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
