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

const { TextArea } = Input;
// Action	For	Supplier	Amount	Amount Paid	Expense Date	Accounts	Student	Remarks
const columns = [
    {
        title: "#",
        dataIndex: "no",
        no: "no",
    },
    {
        title: "For",
        dataIndex: "for",
        key: "for",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
    },
    {
        title: "Amount Paid",
        dataIndex: "paid",
        key: "paid",
    },
    {
        title: "Account",
        dataIndex: "account",
        key: "account",
    },
    {
        title: "Expense Date",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "Remarks",
        dataIndex: "remarks",
        key: "Remarks",
    },
    {
        title: "Action",
        dataIndex: "action",
        key: Math.random(),
        responsive: ["md"],
    },
];

const dataSource = [
    {
        no: 1,
        for: "Building Repair",
        amount: "20000",
        paid: "15000",
        account: "Sonali Bank",
        date: "20/12/2022",
        remarks: " ajlkdfj alsdfj alskdfj alskdfj asdlkf",
        action: "",
    },
    {
        no: 2,
        for: "Transport Repair",
        amount: "1500",
        paid: "1500",
        account: "Sonali Bank",
        date: "15/12/2022",
        remarks: " ajlkdfj alsdfj alskdfj alskdfj asdlkf",
        action: "",
    },
    {
        no: 3,
        for: "Book",
        amount: "2000",
        paid: "2000",
        account: "Sonali Bank",
        date: "10/12/2022",
        remarks: " ajlkdfj alsdfj alskdfj alskdfj asdlkf",
        action: "",
    },
];

export default function RecordExpense() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Card title={"Record Expense"} bodyStyle={{ paddingBottom: 0 }}>
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Expense Head"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter expense head",
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a expense head"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        label: "Building Repair",
                                        value: "br",
                                    },
                                    {
                                        label: "Transport Repair",
                                        value: "tr",
                                    },
                                    {
                                        label: "Salary",
                                        value: "salary",
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Amount"
                            name="amount"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter expense head",
                                },
                            ]}
                        >
                            <InputNumber placeholder="3000" />
                        </Form.Item>
                        <Form.Item
                            label="Expense Date"
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter expense head",
                                },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            label="Expense Remark"
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter expense head",
                                },
                            ]}
                        >
                            <TextArea
                                style={{ height: 50 }}
                                onChange={onChange}
                                placeholder="Expense Remark"
                            />
                        </Form.Item>

                        <Form.Item
                            name="Amount paid"
                            label="Payment type"
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
                                    value="due"
                                >
                                    Due
                                </Radio.Button>
                                <Radio.Button
                                    style={{ width: "50%" }}
                                    value="paid"
                                >
                                    Paid
                                </Radio.Button>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            label="Manual Receipt Number"
                            name="receiptNumber"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter expense head",
                                },
                            ]}
                        >
                            <Input placeholder="434353" />
                        </Form.Item>
                        <Form.Item
                            label="Amount Paid"
                            name="amountPaid"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter expense head",
                                },
                            ]}
                        >
                            <InputNumber placeholder="3000" />
                        </Form.Item>

                        <Form.Item
                            label="Account"
                            name="account"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter account",
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a account"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        label: "Sonali Bank",
                                        value: "sb",
                                    },
                                    {
                                        label: "Bkash",
                                        value: "bk",
                                    },
                                    {
                                        label: "Cash",
                                        value: "cash",
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Date of payment"
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter payment date",
                                },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item>

                        <Form.Item
                            label="Payment Remark"
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter expense head",
                                },
                            ]}
                        >
                            <TextArea
                                style={{ height: 50 }}
                                onChange={onChange}
                                placeholder="Payment Remark"
                            />
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
                <Card title={"Expense List"}>
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
