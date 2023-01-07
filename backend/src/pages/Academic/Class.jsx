import React, { useState, useEffect } from "react";
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
    Table,
    List,
    message,
} from "antd";
import { v4 } from "uuid";
import axios from "axios";
import { useSelector } from "react-redux";
const { Column } = Table;

const columns = [
    {
        title: "Class Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Section(s)",
        dataIndex: "sections",
        render: (data) => (
            <List>
                {data.map((sec) => (
                    <List.Item>{sec.name}</List.Item>
                ))}
            </List>
        ),
    },
    {
        title: "Total Student(s)",
        dataIndex: "sections",
        render: (data) => (
            <List>
                {data.map((sec) => (
                    <List.Item>{sec.capacity}</List.Item>
                ))}
            </List>
        ),
    },
];

export default function Class() {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const { auth } = useSelector((auth) => auth);
    const [sessions, setSessions] = useState(null);
    const [update, setUpdate] = useState(false);
    const [classes, setClasses] = useState(null);
    const [lastSession, setLastSession] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:8000/v1/academic/session", {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                const updatedObjects = res.data.data.map((obj) => {
                    return { value: obj._id, label: obj.name };
                });
                setSessions(updatedObjects);
                setLastSession(updatedObjects[updatedObjects.length - 1].value);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        var data = "";
        var config = {
            method: "get",
            url: `http://localhost:8000/v1/academic/class?session=${lastSession}`,
            headers: {
                token: auth.token,
            },
            data: data,
        };

        axios(config)
            .then((res) => {
                setClasses(res.data.data);
            })
            .catch((error) => {
                messageAlert(false, error.response.data.message);
            });
    }, [update, lastSession]);

    const onFinish = (values) => {
        console.log(values);
        axios
            .post("http://localhost:8000/v1/academic/class", values, {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                messageAlert(true, "Successfully added");
                setUpdate(!update);
                form.resetFields();
            })
            .catch((error) => {
                messageAlert(false, error.response.data.message);
            });
    };

    const messageAlert = (status, message) => {
        messageApi.open({
            type: status ? "success" : "error",
            content: message,
        });
    };

    return (
        <Row gutter={[16, 16]}>
            {contextHolder}
            <Col xs={24} sm={24} md={10} lg={10}>
                <Form
                    initialValues={{ name: "", sections: null }}
                    name="classForm"
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                    form={form}
                >
                    <Card title="Add Class" bodyStyle={{ paddingBottom: 0 }}>
                        <Form.Item
                            name="name"
                            label="Class name"
                            rules={[
                                {
                                    required: true,
                                    message: "Class name is required",
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={(data) => console.log(data)}
                                options={sessions}
                            />
                        </Form.Item>
                        <Form.Item
                            name="name"
                            label="Class name"
                            rules={[
                                {
                                    required: true,
                                    message: "Class name is required",
                                },
                            ]}
                        >
                            <Input placeholder="Enter class name" />
                        </Form.Item>
                        <Form.List
                            name="sections"
                            rules={[
                                {
                                    validator: async (_, names) => {
                                        if (!names || names.length < 1) {
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
                                        ({ key, name, ...restField }) => (
                                            <Space
                                                key={key}
                                                style={{
                                                    display: "flex",
                                                    marginBottom: 8,
                                                    justifyContent:
                                                        "space-evenly",
                                                }}
                                                align="baseline"
                                            >
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, "name"]}
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
                                                    name={[name, "capacity"]}
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

                                                <Button
                                                    shape="circle"
                                                    onClick={() => remove(name)}
                                                >
                                                    -
                                                </Button>
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
                                        >
                                            + Add Section(s)
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
                            <Button type="primary" danger htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Card>
                </Form>
            </Col>
            <Col xs={24} sm={24} md={12} lg={14}>
                <Card
                    title={
                        <>
                            <h3 className="inline-block mr-3">Class list of</h3>
                            <Select
                                style={{
                                    width: 120,
                                }}
                                onChange={(data) => console.log(data)}
                                options={sessions}
                            />
                        </>
                    }
                >
                    <Table
                        size="small"
                        bordered
                        dataSource={classes}
                        pagination={false}
                        columns={columns}
                    />
                </Card>
            </Col>
        </Row>
    );
}
