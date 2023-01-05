
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


const columns = [
    {
        title: "#",
        dataIndex: "no",
        no: "no",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Action",
        dataIndex: "action",
        key: Math.random(),
        responsive: ["md"],
    },
];

const dataSource = [
    {no: 1, name: "Fees",  action: ""},
    {no: 2, name: "Admission",  action: ""},
    {no: 3, name: "Donation",  action: ""},
    {no: 4, name: "Donation",  action: ""},
]

export default function IncomeHead() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


  return (
    <Row gutter={[16, 16]}>
    <Col xs={24} sm={24} md={8} lg={8}>
        <Card title={"Income Head"} bodyStyle={{ paddingBottom: 0 }}>
            <Form
                layout="vertical"
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Income Head name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please enter fee name!",
                        },
                    ]}
                >
                    <Input placeholder="Bank" />
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
        <Card title={"Income Head List"}>
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
  )
}
