import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Select, Button, Table } from "antd";
export default function Routine() {
    const [schedule, setSchedule] = useState([]);

    const handleSubmit = (values) => {
        setSchedule([...schedule, values]);
    };

    const columns = [
        {
            title: "Day",
            dataIndex: "day",
        },
        {
            title: "Start Time",
            dataIndex: "startTime",
        },
        {
            title: "End Time",
            dataIndex: "endTime",
        },
        {
            title: "Description",
            dataIndex: "description",
        },
    ];

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24}>
                <Card title="Class selection">
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                    >
                        <Row gutter={[16]}>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    label="session"
                                    name="Session"
                                    style={{ width: "100%" }}
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your username!",
                                        },
                                    ]}
                                >
                                    <Input style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    label="class"
                                    name="Class"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your username!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    label="section"
                                    name="section"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your username!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item style={{ width: "100%" }} label=" ">
                                    <Button style={{ width: "100%" }}>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
                <Form onFinish={handleSubmit}>
                    <Form.Item name="day" label="Day">
                        <Select>
                            <Select.Option value="Monday">Monday</Select.Option>
                            <Select.Option value="Tuesday">
                                Tuesday
                            </Select.Option>
                            <Select.Option value="Wednesday">
                                Wednesday
                            </Select.Option>
                            <Select.Option value="Thursday">
                                Thursday
                            </Select.Option>
                            <Select.Option value="Friday">Friday</Select.Option>
                            <Select.Option value="Saturday">
                                Saturday
                            </Select.Option>
                            <Select.Option value="Sunday">Sunday</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="startTime" label="Start Time">
                        <Input type="time" />
                    </Form.Item>
                    <Form.Item name="endTime" label="End Time">
                        <Input type="time" />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
                <Table dataSource={schedule} columns={columns} />
            </Col>
        </Row>
    );
}
