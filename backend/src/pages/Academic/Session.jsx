import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Card,
    Button,
    Select,
    Form,
    Input,
    Table,
    Tag,
    Radio,
    DatePicker,
    message,
} from "antd";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useSelector } from "react-redux";
const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
    {
        title: "Session",
        dataIndex: "name",
        key: uuidv4(),
    },
    {
        title: "Starting Date",
        key: uuidv4(),
        dataIndex: "startDate",
        render: (date) => date.replace(/T.*/, ""),
    },
    {
        title: "Ending Date",
        dataIndex: "endDate",
        key: uuidv4(),
        render: (date) => date.replace(/T.*/, ""),
    },
    {
        title: "Action",
        dataIndex: "action",
        key: uuidv4(),
    },
];


export default function Session() {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const { auth } = useSelector((auth) => auth);
    const [update, setUpdate] = useState(false);
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/v1/academic/session", {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                setSessions(res.data.data);
            })
            .catch((error) => {
                messageAlert(false, error.response.data.message);
            });
    }, [update]);

    const onFinish = (values) => {
        const data = {
            name: values.name,
            startDate: values.dateRange[0],
            endDate: values.dateRange[1],
        };
        axios
            .post("http://localhost:8000/v1/academic/session", data, {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                messageAlert(true,"Successfully added")
                setUpdate(!update);
                form.resetFields();
            }).catch((error)=>{
                messageAlert(false, error.response.data.message)
            })
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const messageAlert = (status, message) => {
        messageApi.open({
            type: status ? "success" : "error",
            content: message,
        });
    };

    return (
        <Row gutter={[16, 16]}>
            {contextHolder}

            <Col xs={24} sm={24} md={8} lg={8}>
                <Card title={"Session Add"} bodyStyle={{ paddingBottom: 0 }}>
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="session name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter session name!",
                                },
                            ]}
                        >
                            <Input placeholder="Bank" />
                        </Form.Item>
                        <Form.Item
                            label="Starting and Ending date"
                            name="dateRange"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please select starting and ending date!",
                                },
                            ]}
                        >
                            <RangePicker
                                name="date"
                                timeZone="Asia/Dhaka"
                                className="w-full"
                            />
                        </Form.Item>
                        <Form.Item
                            name="type"
                            label="Status"
                            rules={[
                                {
                                    required: true,
                                    message: "Please pick an option!",
                                },
                            ]}
                        >
                            <Radio.Group style={{ width: "100%" }}>
                                <Radio.Button
                                    style={{ width: "50%" }}
                                    value="active"
                                >
                                    Active
                                </Radio.Button>
                                <Radio.Button
                                    style={{ width: "50%" }}
                                    value="inactive"
                                >
                                    Inactive
                                </Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                className="bg-[#1677ff]"
                                htmlType="submit"
                            >
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
                <Card title={"Session List"}>
                    <Table
                        size="small"
                        bordered={true}
                        pagination={false}
                        dataSource={sessions}
                        columns={columns}
                    />
                </Card>
            </Col>
        </Row>
    );
}
