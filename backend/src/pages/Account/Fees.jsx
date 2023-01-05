import React, { useState } from "react";
import {
    Card,
    Row,
    Col,
    Button,
    Checkbox,
    Form,
    Input,
    AutoComplete,
    InputNumber,
    Table,
    Tag,
    Modal,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import MonthlySelector from "../../components/MonthlySelector";

export default function Fees() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const [value, setValue] = useState("");
    const [options, setOptions] = useState([]);
    const onSearch = (searchText) => {
        setOptions(
            !searchText
                ? []
                : [
                      mockVal(searchText),
                      mockVal(searchText, 2),
                      mockVal(searchText, 3),
                  ],
        );
    };
    const onSelect = (data) => {
        console.log("onSelect", data);
    };
    const onChange = (data) => {
        setValue(data);
    };
    const mockVal = (str, repeat = 1) => ({
        value: str.repeat(repeat),
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataSource = [
        {
            key: "1",
            type: "Admission",
            status: <Tag color="red">Due</Tag>,
            action: (
                <>
                    <Button
                        type="primary"
                        onClick={showModal}
                        className="bg-blue-600 mr-1"
                        icon={<EditOutlined />}
                    />
                    <Button type="primary" danger icon={<DeleteOutlined />} />
                </>
            ),
        },
        {
            key: "2",
            type: "Monthly fee",
            status: <Tag color="success">Active</Tag>,
            action: <Button>delete</Button>,
        },
    ];

    const columns = [
        {
            title: "#",
            dataIndex: "key",
            key: "key",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "key",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            responsive: ["md"],
        },
    ];

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
        >
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onCancel={handleCancel}
                maskClosable={false}
                footer={[
                    <Button danger key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button
                        ghost
                        key="submit"
                        type="primary"
                        onClick={handleCancel}
                    >
                        Submit
                    </Button>,
                ]}
            >
                <MonthlySelector />
            </Modal>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={8} lg={8}>
                    <Card
                        title={"Fee Type Add"}
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
                                className="w-full"
                                label="Student ID"
                                name="studentID"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input student id!",
                                    },
                                ]}
                            >
                                <AutoComplete
                                    className="w-full"
                                    options={options}
                                    onSelect={onSelect}
                                    onSearch={onSearch}
                                    onChange={onChange}
                                    children={
                                        <InputNumber
                                            type={"number"}
                                            placeholder="24224"
                                        />
                                    }
                                />
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
        </Form>
    );
}
