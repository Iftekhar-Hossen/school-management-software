import React, { useState } from "react";
import { Row, Col, Card, Button, Select, Form, Input, Table } from "antd";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const { Option } = Select;

const columns = [
    {
        title: "Subject",
        dataIndex: "name",
        key: uuidv4(),
    },
    {
        title: "Code",
        dataIndex: "code",
        key: uuidv4(),
    },

    {
        title: "Action",
        dataIndex: "action",
        key: uuidv4(),
    },
];

export default function Subject() {
    const { auth } = useSelector((data) => data);
    const [update, setUpdate] = useState(false);
    const [subjects, setSubjects] = useState([]);

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    useEffect(() => {
        axios
            .get("/v1/academic/subject", {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                setSubjects(res.data.data);
            });
    }, [update]);

    const onFinish = (values) => {
        axios
            .post("/v1/academic/subject", values, {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                setUpdate(!update);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Card title={"Subject"} bodyStyle={{ paddingBottom: 0 }}>
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Subject Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter subject name!",
                                },
                            ]}
                        >
                            <Input placeholder="A+" />
                        </Form.Item>

                        <Form.Item
                            label="Code"
                            name="code"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter subject code!",
                                },
                            ]}
                        >
                            <Input placeholder="125" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                className="bg-[#1677ff]"
                                htmlType="submit"
                            >
                                Save Subject
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
                <Card title={"Subjects List"}>
                    <Table
                        size="small"
                        bordered={true}
                        pagination={false}
                        dataSource={subjects}
                        columns={columns}
                    />
                </Card>
            </Col>
        </Row>
    );
}
