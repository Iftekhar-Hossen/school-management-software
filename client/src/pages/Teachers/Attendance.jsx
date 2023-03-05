import React, { useState } from "react";
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
    DatePicker,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Option } = Select;

const columns = [
    {
        title: "Roll",
        dataIndex: "key",
        key: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Last 3 days attendance",
        dataIndex: "type",
        key: "type",
    },
    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        responsive: ["md"],
    },
];
export default function Attendance() {
    const [dataSource, setDataSource] = useState([]);

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Success:", values);

        console.log(JSON.parse(localStorage.getItem("database")).students);

        setDataSource([
            {
                key: "1",
                name: "Roy Mia",
                type: (
                    <Button.Group disabled buttonStyle="solid" size="small">
                        <Button value="28" disabled>
                            P
                        </Button>
                        <Button
                            danger
                            className="bg-red-600"
                            value="29"
                            disabled
                        >
                            A
                        </Button>
                        <Button value="30" disabled>
                            P
                        </Button>
                    </Button.Group>
                ),
                status: <Tag color="success">Active</Tag>,
                action: (
                    <Radio.Group
                        defaultValue="present"
                        buttonStyle="solid"
                        size="small"
                    >
                        <Radio.Button value="present">Present</Radio.Button>
                        <Radio.Button value="absent">Absent</Radio.Button>
                    </Radio.Group>
                ),
            },
            {
                key: "1",
                name: "Balad Mia",
                type: (
                    <Button.Group disabled buttonStyle="solid" size="small">
                        <Button value="28" disabled>
                            P
                        </Button>
                        <Button
                            danger
                            className="bg-red-600"
                            value="29"
                            disabled
                        >
                            A
                        </Button>
                        <Button value="30" disabled>
                            P
                        </Button>
                    </Button.Group>
                ),
                status: <Tag color="success">Active</Tag>,
                action: (
                    <Radio.Group
                        defaultValue="present"
                        buttonStyle="solid"
                        size="small"
                    >
                        <Radio.Button value="present">Present</Radio.Button>
                        <Radio.Button value="absent">Absent</Radio.Button>
                    </Radio.Group>
                ),
            },
            {
                key: "1",
                name: "Balad Mia",
                type: (
                    <Button.Group disabled buttonStyle="solid" size="small">
                        <Button value="28" disabled>
                            P
                        </Button>
                        <Button
                            danger
                            className="bg-red-600"
                            value="29"
                            disabled
                        >
                            A
                        </Button>
                        <Button value="30" disabled>
                            P
                        </Button>
                    </Button.Group>
                ),
                status: <Tag color="success">Active</Tag>,
                action: (
                    <Radio.Group
                        defaultValue="present"
                        buttonStyle="solid"
                        size="small"
                    >
                        <Radio.Button value="present">Present</Radio.Button>
                        <Radio.Button value="absent">Absent</Radio.Button>
                    </Radio.Group>
                ),
            },
            {
                key: "1",
                name: "Balad Mia",
                type: (
                    <Button.Group disabled buttonStyle="solid" size="small">
                        <Button value="28" disabled>
                            P
                        </Button>
                        <Button
                            danger
                            className="bg-red-600"
                            value="29"
                            disabled
                        >
                            A
                        </Button>
                        <Button value="30" disabled>
                            P
                        </Button>
                    </Button.Group>
                ),
                status: <Tag color="success">Active</Tag>,
                action: (
                    <Radio.Group
                        defaultValue="present"
                        buttonStyle="solid"
                        size="small"
                    >
                        <Radio.Button value="present">Present</Radio.Button>
                        <Radio.Button value="absent">Absent</Radio.Button>
                    </Radio.Group>
                ),
            },
            {
                key: "1",
                name: "Balad Mia",
                type: (
                    <Button.Group disabled buttonStyle="solid" size="small">
                        <Button value="28" disabled>
                            P
                        </Button>
                        <Button
                            danger
                            className="bg-red-600"
                            value="29"
                            disabled
                        >
                            A
                        </Button>
                        <Button value="30" disabled>
                            P
                        </Button>
                    </Button.Group>
                ),
                status: <Tag color="success">Active</Tag>,
                action: (
                    <Radio.Group
                        defaultValue="present"
                        buttonStyle="solid"
                        size="small"
                    >
                        <Radio.Button value="present">Present</Radio.Button>
                        <Radio.Button value="absent">Absent</Radio.Button>
                    </Radio.Group>
                ),
            },
        ]);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Card
                    title={"Student Attendance"}
                    bodyStyle={{ paddingBottom: 0 }}
                >
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        form={form}
                    >
                        <Form.Item
                            name="class"
                            label="Class"
                            rules={[{ required: true }]}
                        >
                            <Select
                                placeholder="Select a option and change input text above"
                                allowClear
                            >
                                <Option value="one">One - 1</Option>
                                <Option value="two">Two - 2</Option>
                                <Option value="three">Three - 3</Option>
                                <Option value="four">Four - 4</Option>
                                <Option value="five">Five - 5</Option>
                                <Option value="six">Six - 6</Option>
                                <Option value="seven">Seven - 7</Option>
                                <Option value="eight">Eight - 8</Option>
                                <Option value="nine">Nine - 9</Option>
                                <Option value="ten">Ten - 10</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="section"
                            label="Section"
                            rules={[{ required: true }]}
                        >
                            <Select
                                placeholder="Select a option and change input text above"
                                allowClear
                            >
                                <Option value="science-1">Science - A</Option>
                                <Option value="science-2">Science - B </Option>
                                <Option value="commerce-1">Commerce - A</Option>
                                <Option value="commerce-2">Commerce - B</Option>
                                <Option value="arts-1">Arts - A</Option>
                                <Option value="arts--2">Arts - B</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name={"date"}
                            label="Date"
                            rules={[{ required: true }]}
                        >
                            <DatePicker className={"w-full"} />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                className="bg-[#1677ff]"
                                htmlType="submit"
                            >
                                Search
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
                <Card title={"Students List"}>
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
