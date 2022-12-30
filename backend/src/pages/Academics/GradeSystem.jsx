import React from "react";
import { Row, Col, Card, Button, Select, Form, Input, InputNumber } from "antd";
const { Option } = Select;
export default function GradeSystem() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
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
                            <Input placeholder="5" />
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
                                                        "Please input starting number!",
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
                                                        "Please input your password!",
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
        </Row>
    );
}
