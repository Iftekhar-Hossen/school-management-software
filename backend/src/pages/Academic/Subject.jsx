import React from "react";
import { Row, Col, Card, Button, Select, Form, Input, InputNumber } from "antd";
const { Option } = Select;
export default function Subject() {
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
                            label="Subject Name"
                            name="subject"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter subject name!",
                                },
                            ]}
                        >
                            <Input placeholder="A+" />
                        </Form.Item>

                        <Form.Item
                            label="Code"
                            name="code"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter subject code!",
                                },
                            ]}
                        >
                            <Input placeholder="125" />
                        </Form.Item>


                        <Form.Item>
                            <Button
                                type="primary"
                                className="bg-[#1677ff]"
                                htmlType="submit"
                            >
                                Save Subject
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
}
