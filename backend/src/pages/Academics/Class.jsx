import React from "react";
import {
    Row,
    Col,
    Card,
    Button,
    Form,
    Input,
    Select,
    Space,
    Alert,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function Class() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("Received values of form:", values);
        if (values.sections == undefined) {
            return;
        }
    };

    return (
        <Row gutter={[16, 16]}>
            <Col xl={24} md={24} lg={24}>
                <Form
                    name="dynamic_form_nest_item"
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={10} lg={10}>
                            <Card
                                title="Add Class"
                                bodyStyle={{ paddingBottom: 0 }}
                            >
                                <Form.Item
                                    name="className"
                                    label="Class name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Class name is required",
                                        },
                                    ]}
                                >
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                                <Form.List
                                    name="names"
                                    rules={[
                                        {
                                            validator: async (_, names) => {
                                                if (
                                                    !names ||
                                                    names.length < 1
                                                ) {
                                                    return Promise.reject(
                                                        new Error(
                                                            "At least 1 section required",
                                                        ),
                                                    );
                                                }
                                            },
                                        },
                                    ]}
                                >
                                    {(fields, { add, remove }, { errors }) => (
                                        <>
                                            {fields.map(
                                                ({
                                                    key,
                                                    name,
                                                    ...restField
                                                }) => (
                                                    <Space
                                                        key={key}
                                                        style={{
                                                            display: "flex",
                                                            marginBottom: 8,
                                                        }}
                                                        align="baseline"
                                                    >
                                                        <Form.Item
                                                            {...restField}
                                                            name={[
                                                                name,
                                                                "sectionName",
                                                            ]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message:
                                                                        "Missing section name",
                                                                },
                                                            ]}
                                                        >
                                                            <Input placeholder="Section Name" />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[
                                                                name,
                                                                "totalStudent",
                                                            ]}
                                                            rules={[
                                                                {
                                                                    required: true,

                                                                    message:
                                                                        "Missing total student",
                                                                },
                                                            ]}
                                                        >
                                                            <Input
                                                                type="number"
                                                                placeholder="Total Student"
                                                            />
                                                        </Form.Item>
                                                        <MinusCircleOutlined
                                                            onClick={() =>
                                                                remove(name)
                                                            }
                                                        />
                                                    </Space>
                                                ),
                                            )}

                                            <Form.Item className="mb-2">
                                                <Button
                                                    type="dashed"
                                                    onClick={() => {
                                                        add();
                                                        console.log(fields);
                                                    }}
                                                    block
                                                    icon={<PlusOutlined />}
                                                >
                                                    Add Section(s)
                                                </Button>
                                            </Form.Item>

                                            {errors.length > 0 && (
                                                <Alert
                                                    className="py-1"
                                                    message={errors}
                                                    type="error"
                                                    showIcon
                                                />
                                            )}
                                        </>
                                    )}
                                </Form.List>

                                <Form.Item className="mt-5">
                                    <Button
                                        type="primary"
                                        danger
                                        htmlType="submit"
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Card></Card>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
}
