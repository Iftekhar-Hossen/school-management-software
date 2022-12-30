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
} from "antd";
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
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card title="Quick Fees Pay" bordered>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={12} lg={12}>
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
                                    <AutoComplete.Number
                                        className="w-full"
                                        value={value}
                                        options={options}
                                        onSelect={onSelect}
                                        onSearch={onSearch}
                                        onChange={onChange}
                                        placeholder="24224"
                                        children={<input />}                                        

                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12}>
                                <Form.Item
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
                                        value={value}
                                        options={options}
                                        onSelect={onSelect}
                                        onSearch={onSearch}
                                        onChange={onChange}
                                        placeholder="control mode"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Form>
    );
}
