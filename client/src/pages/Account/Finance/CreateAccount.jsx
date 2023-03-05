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
import { useSelector } from "react-redux";
import axios from "axios";
const { Option } = Select;

const columns = [
    {
        title: "#",
        dataIndex: "no",
        no: "no",
    },
    {
        title: "Account Name",
        key: "name",
        dataIndex: "name"
    },
    {
        title: "Account Type",
        render: (data)=> (data.type.name),
        key: "type",
    },
    {
        title: "Balance",
        dataIndex: "balance",
        key: "balance",
    },
    {
        title: "Account Start Date",
        dataIndex: "openingDate",
        key: "date",
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (data)=> data ? "Active": "Inactive"
    },
    {
        title: "Action",
        dataIndex: "action",
        key: Math.random(),
        responsive: ["md"],
    },
];

export default function CreateAccount() {
    const { auth } = useSelector((data) => data);
    const [accountTypes, setAccountTypes] = useState([]);
    const [accounts, setAccounts] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        axios
            .get("http://localhost:8000/v1/accounts/finance/account-type", {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                const updatedObjects = res.data.data.map((obj) => {
                    return { value: obj._id, label: obj.name };
                });
                setAccountTypes(updatedObjects);
            })
            .catch((error) => {
                console.log(
                    "🚀 ~ file: AccountType.jsx:65 ~ useEffect ~ error",
                    error,
                );
                return {};
            });
    }, []);


    useEffect(() => {
        axios
            .get("http://localhost:8000/v1/accounts/finance/account", {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                console.log(res.data)
                setAccounts(res.data.data);
            })
            .catch((error) => {
             console.log("🚀 ~ file: CreateAccount.jsx:129 ~ useEffect ~ error", error)
             
            });
    }, [update]);


    const onFinish = (values) => {
        console.log("Success:", values);
        axios.post("http://localhost:8000/v1/accounts/finance/account", values, {
            headers:{
                token: auth.token
            }
        }).then((res)=>{
            console.log(res.data)
            setUpdate(!update)
        }).catch((error)=>{
            console.log(error)
        })
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
                            name="type"
                            label="Account type"
                            rules={[
                                {
                                    required: true,
                                    message: "Account type is required",
                                },
                            ]}
                        >
                            <Select
                                
                                placeholder="Bank"
                                options={accountTypes}
                            />
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
                            <InputNumber style={{width: "100%"}} placeholder="1000" />
                        </Form.Item>
                        <Form.Item
                            label="Account Start Date                    "
                            name="openingDate"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter fee name!",
                                },
                            ]}
                        >
                            <DatePicker style={{width: "100%"}} onChange={onChange} />
                        </Form.Item>
                        <Form.Item
                            name="status"
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
                        dataSource={accounts}
                        columns={columns}
                    />
                </Card>
            </Col>
        </Row>
    );
}
