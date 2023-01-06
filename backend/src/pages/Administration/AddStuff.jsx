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
    Select,
    Tag,
} from "antd";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";

const { TextArea } = Input;

export default function AddStuff() {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const { auth } = useSelector((auth) => auth);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const successApi = (message) => {
        messageApi.open({
            type: "success",
            content: message,
        });
    };
    const errorApi = (message) => {
        messageApi.open({
            type: "error",
            content: message,
        });
    };

    const onFinish = (values) => {
        console.log(values);
        setLoading(true);
        axios
            .post(
                `http://localhost:8000/v1/admin/add-admin`,
                {
                    ...values,
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
                setLoading(false);
                console.log(res);
                setData(res.data.data);
                successApi("Stuff added successfully");
                // alert(JSON.stringify(res.data.data));
            })
            .catch((error) => {
                setLoading(false);
                // console.log(error);
                errorApi(error.response.data.message);
            });
    };

    const onFinishFailed = () => {
        message.error("Submit failed!");
    };
    const optionRender = (props) => {
        const { label, value, color, closable, onClose } = props;
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={color}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{
                    marginRight: 3,
                }}
            >
                {label}
            </Tag>
        );
    };

    return (
        <div>
            {contextHolder}
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
                                                timeZone="Asia/Dhaka"
                                                className="w-full"
                                                placeholder="2000-12-13"
                                                format="YYYY-MM-DD"
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
                                                timeZone="Asia/Dhaka"
                                                className="w-full"
                                                placeholder={"2022-12-07"}
                                                format="YYYY-MM-DD"
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
                                            required
                                            rules={[
                                                {
                                                    type: "email",
                                                    required: true,
                                                    message:
                                                        "Email is required",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={24} lg={24}>
                                        <Form.Item
                                            name={"role"}
                                            label="Select Role"
                                            tooltip="This is not a required field."
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Email is required",
                                                },
                                            ]}
                                        >
                                            <Select
                                                mode="multiple"
                                                showArrow
                                                tagRender={optionRender}
                                                style={{
                                                    width: "100%",
                                                }}
                                                options={[
                                                    {
                                                        color: "green",
                                                        value: "teacher",
                                                        label: "Teacher",
                                                    },
                                                    {
                                                        color: "yellowgreen",
                                                        value: "accountant",
                                                        label: "Accountant",
                                                    },
                                                    {
                                                        color: "red",
                                                        value: "admin",
                                                        label: "Admin",
                                                    },
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col sm={24} md={24} lg={24}>
                                        <Form.Item>
                                            <Button
                                                loading={loading}
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
