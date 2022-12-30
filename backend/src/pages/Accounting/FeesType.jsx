import React from "react";
import { Row, Col, Card, Button, Select, Form, Input, Table, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Option } = Select;

const dataSource = [
    {
        key: "1",
        type: "Admission",
        status: <Tag color="success">Active</Tag>,
        action: (
            <>
                <Button
                    type="primary"
                    className="bg-blue-600 mr-1"
                    icon={<EditOutlined />}
                />
                <Button type="primary" danger icon={<DeleteOutlined />} />
            </>
        ),
    },
    {
        key: "2",
        type: "Monthly fee",
        status: <Tag color="success">Active</Tag>,
        action: <Button>delete</Button>,
    },
];

const columns = [
    {
        title: "#",
        dataIndex: "key",
        key: "key",
    },
    {
        title: "Type",
        dataIndex: "type",
        key: "type",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "key",
    },
    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        responsive: ["md"],
    },
];

export default function FeesType() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Card title={"Fee Type Add"} bodyStyle={{ paddingBottom: 0 }}>
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Fee Name"
                            name="feeName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter fee name!",
                                },
                            ]}
                        >
                            <Input placeholder="Admission" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                className="bg-[#1677ff]"
                                htmlType="submit"
                            >
                                Save Fee Type
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
                <Card title={"Fees List"}>
                    <Table
                        size="small"
                        bordered={true}
                        pagination={false}
                        dataSource={dataSource}
                        columns={columns}
                    />
                </Card>
            </Col>
        </Row>
    );
}
