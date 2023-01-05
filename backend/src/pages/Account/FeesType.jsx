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
        title: "name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "type",
        dataIndex: "type",
        key: Math.random(),
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

export default function FeesType() {
    let [dataSource, setDataSource] = useState(null);
    let [update, setUpdate] = useState(false);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("database")).feesList;
        setDataSource(items);
        setUpdate(false);
    }, [update]);

    window.addEventListener("storage", () => {
        setDataSource(JSON.parse(localStorage.getItem("database")).feesList);
    });

    const onFinish = (values) => {
        console.log("Success:", values);
        dataSource = [
            ...dataSource,
            { no: dataSource.length + 1, ...values, status: "Active" },
        ];
        let newData = JSON.parse(localStorage.getItem("database"));
        newData.feesList = dataSource;
        localStorage.setItem("database", JSON.stringify(newData));
        setUpdate(!update);
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
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter fee name!",
                                },
                            ]}
                        >
                            <Input placeholder="Admission" />
                        </Form.Item>
                        <Form.Item
                            name="type"
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
                                    value="oneTime"
                                >
                                    One time
                                </Radio.Button>
                                <Radio.Button
                                    style={{ width: "50%" }}
                                    value="monthly"
                                >
                                    Monthly
                                </Radio.Button>
                            </Radio.Group>
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
