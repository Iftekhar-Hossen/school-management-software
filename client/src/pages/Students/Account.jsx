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
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Option } = Select;

export default function Account() {
    let [dataSource, setDataSource] = useState(null);
    let [update, setUpdate] = useState(false);

    const onFinish = (values) => {
        setDataSource([
            {
                key: "1",
                name: "Admission",
                due: 2000,
                total: 2000,
                action: <Button>pay</Button>
            },
        ]);
        setUpdate(!update);
    };

    const columns = [
        {
            title: "Account Title",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Due",
            dataIndex: "due",
            key: "due",
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "key",
        },
    ];
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Card title={"Student fess"} bodyStyle={{ paddingBottom: 0 }}>
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Student ID"
                            name="id"
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
                                Search Student
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
                <Card title={"Fees List"}>
                    <Table pagination={false} bordered dataSource={dataSource} columns={columns} />
                </Card>
            </Col>
        </Row>
    );
}
