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
} from "antd";
import { v4 } from "uuid";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import axios from "axios";
import { useSelector } from "react-redux";
const { Column } = Table;

export default function Class() {
    let [dataSource, setDataSource] = useState(null);
    let [teacher, setTeacher] = useState(null);
    let [update, setUpdate] = useState(false);

    let [option, setOption] = useState(null);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("database")).classList;
        const teacherItem = JSON.parse(
            localStorage.getItem("database"),
        ).teachersList;

        let newOptions = [];
        teacherItem.map((data) => {
            if (data.classTeacher != null) {
                newOptions = [
                    ...newOptions,
                    { label: data.name, disabled: false, value: data.no },
                ];
            } else {
                newOptions = [
                    ...newOptions,
                    { label: data.name, disabled: false, value: data.no },
                ];
            }
        });
        setOption(newOptions);

        setDataSource(items);
        setTeacher(teacherItem);

        setUpdate(false);
    }, [update]);

    const [form] = Form.useForm();
    console.log("old", dataSource);
    const onFinish = (values) => {
        console.log(values);

        values.sections.map((data, index) => {
            teacher.map((tdata, i) => {
                if (tdata.no == data.teacher) {
                    teacher[i] = {
                        ...tdata,
                        classTeacher: [dataSource.length + 1, index + 1],
                    };
                    setTeacher([...teacher]);
                }
            });
        });

        setDataSource([
            ...dataSource,
            { no: dataSource.length + 1, ...values },
        ]);
        console.log(dataSource);

        let newData = JSON.parse(localStorage.getItem("database"));
        newData.classList = dataSource;

        let newTeacherData = JSON.parse(localStorage.getItem("database"));
        newTeacherData.teachersList = teacher;

        localStorage.setItem("database", JSON.stringify(newData));
        localStorage.setItem("database", JSON.stringify(newTeacherData));
        setUpdate(!update);
    };

    const handleChange = (value) => {
        console.log(value);
        let newOptions = [];
        option.map((data) => {
            console.log(data);
        });
    };

    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={10} lg={10}>
                <Form
                    name="dynamic_form_nest_item"
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
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
                            <Input placeholder="input placeholder" />
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
                                                    name={[name, "total"]}
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
                                                    onClick={() => remove(name)}
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
                            <Button type="primary" danger htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Card>
                </Form>
            </Col>
            <Col xs={24} sm={24} md={12} lg={14}>
                <Card title="Class List">
                    <Table
                        size="small"
                        bordered
                        dataSource={dataSource}
                        pagination={false}
                    >
                        <Column title="#" dataIndex="no" key={v4()} />
                        <Column
                            title="Class Name"
                            dataIndex="name"
                            key={v4()}
                        />
                        <Column
                            title="Sections"
                            dataIndex="sections"
                            render={(data) => (
                                <List>
                                    {data.map((sec) => (
                                        <List.Item>{sec.name}</List.Item>
                                    ))}
                                </List>
                            )}
                            key={v4()}
                        />
                    </Table>
                </Card>
            </Col>
        </Row>
    );
}
