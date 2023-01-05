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
    InputNumber,
    DatePicker,
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
        title: "Account Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Account Type",
        dataIndex: "type",
        key: "type",
    },
    {
        title: "Balance",
        dataIndex: "balance",
        key: "balance",
    },
    {
        title: "Account Start Date",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: Math.random(),
    },
    {
        title: "Action",
        dataIndex: "action",
        key: Math.random(),
        responsive: ["md"],
    },
];

const dataSource = [
    { no: 1, name: "Sonali Bank",  balance:"342352354", date: "25/12/2007",type: "Bank", status: "Active", action: "" },
    { no: 2, name: "Bkash", balance:"23523523", date: "26/12/2014", type: "E-wallet", status: "Active", action: "" },
    { no: 3, name: "Office", balance:"33353", date: "25/12/2007", type: "Cash", status: "Active", action: "" },
];

export default function CreateAccount() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Card title={"Create account"} bodyStyle={{ paddingBottom: 0 }}>
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Account name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter fee name!",
                                },
                            ]}
                        >
                            <Input placeholder="Account Name" />
                        </Form.Item>
                        <Form.Item
                            label="Opening Balance"
                            name="balance"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter fee name!",
                                },
                            ]}
                        >
                            <InputNumber placeholder="1000" />
                        </Form.Item>
                        <Form.Item
                            label="Account Start Date                    "
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter fee name!",
                                },
                            ]}
                        >
                            <DatePicker onChange={onChange} />
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
                                    value="oneTime"
                                >
                                    Active
                                </Radio.Button>
                                <Radio.Button
                                    style={{ width: "50%" }}
                                    value="monthly"
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
                                Save Account
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
                <Card title={"Account Types List"}>
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
