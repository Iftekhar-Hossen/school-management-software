import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Select, Form, Input, InputNumber, Table } from "antd";
const { Option } = Select;
export default function GradeSystem() {
    const [grade, setGrade] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        let new_grade = JSON.parse(localStorage.getItem("database"));
        setGrade(new_grade);
        setUpdate(!update);
    }, [update]);

    const onFinish = (values) => {
        console.log(values);
        console.log("Success:", values);
        setGrade([...grade, { ...values, no: grade.length + 1 }]);
        localStorage.setItem(
            "database",
            JSON.stringify(
                (JSON.parse(localStorage.getItem("database")).gradeList =
                    grade),
            ),
        );
        setUpdate(!update);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


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

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Card title={"Grade system"} bodyStyle={{ paddingBottom: 0 }}>
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Grad name"
                            name="gradeName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter grade name!",
                                },
                            ]}
                        >
                            <Input placeholder="A+" />
                        </Form.Item>

                        <Form.Item
                            label="GPA (Grade Point Average)"
                            name="gpa"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input GPA!",
                                },
                            ]}
                        >
                            <InputNumber
                                style={{ width: "100%" }}
                                placeholder="5"
                            />
                        </Form.Item>

                        <Form.Item label="Number" name={"numberRange"}>
                            <Input.Group>
                                <Row gutter={10}>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Form.Item
                                            name={["numberRange", "from"]}
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter starting number!",
                                                },
                                            ]}
                                        >
                                            <InputNumber
                                                min={0}
                                                max={100}
                                                style={{ width: "100%" }}
                                                placeholder={80}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Form.Item
                                            name={["numberRange", "to"]}
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter ending number!",
                                                },
                                            ]}
                                        >
                                            <InputNumber
                                                min={0}
                                                max={100}
                                                style={{ width: "100%" }}
                                                placeholder={100}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Input.Group>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                className="bg-[#1677ff]"
                                htmlType="submit"
                            >
                                Save grade
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
                        dataSource={null}
                        columns={columns}
                    />
                </Card>
            </Col>
        </Row>
    );
}
