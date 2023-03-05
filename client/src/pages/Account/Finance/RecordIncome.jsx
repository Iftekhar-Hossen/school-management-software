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
import dayjs from "dayjs"
const { TextArea } = Input;

const columns = [
    {
        title: "Receipt No",
        dataIndex: "receiptNo",
        key: "receiptNo",
    },
    {
        title: "Manual Receipt No",
        dataIndex: "manualReceiptNo",
        key: "manualReceiptNo",
    },
    {
        title: "From",
        dataIndex: "from",
        key: "from",
    },
    {
        title: "Account",
        dataIndex: "account",
        key: "account",
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
    },
    {
        title: "Date Income",
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
        receiptNo: "1",
        manualReceiptNo: "143535",
        from: "Books Sell",
        account: "Bkash",
        amount: "40000",
        date: "20/12/2022",

        remarks: " ",
        action: "",
    },
    {
        receiptNo: "2",
        manualReceiptNo: "9053",
        from: "Donation",
        account: "Bkash",
        amount: "40000",
        date: "20/12/2022",
        
        remarks: " ",
        action: "",
    },
    {
        receiptNo: "3",
        manualReceiptNo: "133",
        from: "Donation",
        account: "Sonali Bank",
        amount: "40000",
        date: "20/12/2022",
        remarks: " ",
        action: "",
    },

];

export default function RecordIncome() {
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
                            label="Manual Receipt Number"
                            name="receipt"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter expense head",
                                },
                            ]}
                        >
                            <Input placeholder="3000" />
                        </Form.Item>

                        <Form.Item
                            label="Income Head"
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
                            label="Amount"
                            name="amount"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter expense head",
                                },
                            ]}
                        >
                            <InputNumber style={{width: "100%"}} placeholder="3000" />
                        </Form.Item>
                        <Form.Item
                            label="Date of Income"
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter expense head",
                                },
                            ]}
                        >
                            <DatePicker style={{width: "100%"}} defaultValue={dayjs()} />
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
