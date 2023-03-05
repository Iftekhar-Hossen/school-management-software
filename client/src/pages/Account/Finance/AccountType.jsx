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
import { useSelector } from "react-redux";
import axios from "axios";
const { Option } = Select;

const columns = [
    {
        title: "Account Type",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: Math.random(),
        render: (data) => (data == true ? "Active" : "Inactive"),
    },
    {
        title: "Action",
        dataIndex: "action",
        key: Math.random(),
        responsive: ["md"],
    },
];

const dataSource = [
    { no: 1, name: "Bank", status: "Active", action: "" },
    { no: 2, name: "E-wallet", status: "Active", action: "" },
    { no: 3, name: "Cash", status: "Active", action: "" },
];

export default function AccountType() {
    const { auth } = useSelector((data) => data);
    const [update, setUpdate] = useState(false);
    const [accountTypes, setAccountTypes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/v1/accounts/finance/account-type", {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                setAccountTypes(res.data.data);
            })
            .catch((error) => {
                console.log(
                    "🚀 ~ file: AccountType.jsx:65 ~ useEffect ~ error",
                    error,
                );
                return {};
            });
    }, [update]);


    const onFinish = (values) => {
        console.log("Success:", values);
        axios
            .post(
                "http://localhost:8000/v1/accounts/finance/account-type",
                values,
                {
                    headers: {
                        token: auth.token,
                    },
                },
            )
            .then((res) => {
                setUpdate(!update);
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Card
                    title={"Account Type Add"}
                    bodyStyle={{ paddingBottom: 0 }}
                >
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Account Type"
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
                        <Form.Item
                            name="status"
                            label="Status"
                            rules={[
                                {
                                    type: Boolean,
                                    required: true,
                                    message: "Please pick an option!",
                                },
                            ]}
                        >
                            <Radio.Group style={{ width: "100%" }}>
                                <Radio.Button
                                    style={{ width: "50%" }}
                                    value={true}
                                >
                                    Active
                                </Radio.Button>
                                <Radio.Button
                                    style={{ width: "50%" }}
                                    value={false}
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
                                Save Type
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
                        dataSource={accountTypes}
                        columns={columns}
                    />
                </Card>
            </Col>
        </Row>
    );
}
