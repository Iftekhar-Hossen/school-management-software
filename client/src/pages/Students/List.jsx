import React, { useEffect, useState } from "react";
import {
    Button,
    Col,
    Form,
    Input,
    message,
    Row,
    DatePicker,
    Card,
    Table,
    Select,
} from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
const { TextArea } = Input;
const {Column} = Table

export default function StudentList() {
    const { session, auth } = useSelector((data) => data);
    const [classes, setClasses] = useState(null);
    const [sections, setSections] = useState(null);
    const [form] = Form.useForm();
    const selectedSession = Form.useWatch("session", form);
    const selectedClass = Form.useWatch("class", form);
    const [queries, setQueries] = useState([]);
    const [students, setStudents] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(
                    "http://localhost:8000/v1/academic/class",
                    {
                        params: {
                            session: selectedSession,
                        },
                        headers: {
                            token: auth.token,
                        },
                    },
                );
                const options = res.data.data.map((item) => {
                    return {
                        value: item._id,
                        label: item.name,
                        children: item.sections.map((section) => {
                            return {
                                value: section._id,
                                label: section.name,
                            };
                        }),
                    };
                });

                setClasses(options);
                console.log(
                    "🚀 ~ file: AddStudent.jsx:51 ~ fetchData ~ res",
                    res.data.data,
                );
            } catch (error) {
                console.log(
                    "🚀 ~ file: AddStudent.jsx:42 ~ fetchData ~ error",
                    error,
                );
            }
        }
        fetchData();
    }, [selectedSession]);

    useEffect(() => {
        classes &&
            classes.filter((data) => {
                if (data.value === selectedClass) {
                    setSections(data.children);
                    console.log(data.children);
                }
            });
    }, [selectedClass]);

    const onFinish = (values) => {
        setQueries(values.queries);
        axios
            .get("http://localhost:8000/v1/academic/student-list", {
                params: {
                    ...values,
                    query: ["name", "email", "phone", "guardianName"],
                },
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                console.log(
                    "🚀 ~ file: AddStudent.jsx:81 ~ onFinish ~ res",
                    setStudents(res.data.data)
                );
                message.success("Submit success!");
            })
            .catch((error) => {
                console.log(auth.token);
                console.log(
                    "🚀 ~ file: AddStudent.jsx:81 ~ onFinish ~ error",
                    error,
                );
            });
    };

    const onFinishFailed = () => {
        message.error("Submit failed!");
    };

    const columns = [
        {
          title: "Admission Id",
          dataIndex: "admissionId",
          key: "admissionId"
        },
        {
          title: "Class Roll",
          dataIndex: "classRoll",
          key: "classRoll"
        },
        {
          title: "Student",
          dataIndex: "student",
          key: "student",
          render: student => (
            <div>
              <p>{student.firstName} {student.lastName}</p>
              <p>{student.email}</p>
              <p>{student.gender}</p>
              <p>{student.dateOfBirth}</p>
            </div>
          )
        }
      ];

    return (
        <Row>
            <Col xs={24} md={24} lg={24}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    enctype="multipart/form-data"
                    initialValues={{
                        session: "",
                        class: "",
                        section: "",
                        admissionId: "",
                        classRoll: "",
                    }}
                >
                    <div className="site-card-wrapper">
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Card
                                    title="Academic information"
                                    bordered={true}
                                    bodyStyle={{ paddingBottom: 0 }}
                                >
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={4} lg={4}>
                                            <Form.Item
                                                name="session"
                                                label="Session"
                                                rules={[
                                                    {
                                                        type: "string",
                                                        required: true,
                                                        message:
                                                            "Please enter present address!",
                                                    },
                                                ]}
                                            >
                                                {session && (
                                                    <Select
                                                        options={session}
                                                        defaultValue={
                                                            session[
                                                                session.length -
                                                                    1
                                                            ]
                                                        }
                                                        placeholder="Select a session"
                                                    />
                                                )}
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={4} lg={4}>
                                            <Form.Item
                                                name="class"
                                                label="Class"
                                                rules={[
                                                    {
                                                        type: "string",
                                                        required: true,
                                                        message:
                                                            "Please enter present address!",
                                                    },
                                                ]}
                                            >
                                                {session && (
                                                    <Select
                                                        disabled={
                                                            classes == null
                                                                ? true
                                                                : false
                                                        }
                                                        options={classes}
                                                        placeholder="Select a class"
                                                    />
                                                )}
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={4} lg={4}>
                                            <Form.Item
                                                name="section"
                                                label="Section"
                                                rules={[
                                                    {
                                                        type: "string",
                                                        required: true,
                                                        message:
                                                            "Please enter present address!",
                                                    },
                                                ]}
                                            >
                                                {(session || classes) && (
                                                    <Select
                                                        disabled={
                                                            sections == null
                                                                ? true
                                                                : false
                                                        }
                                                        options={sections}
                                                        placeholder="Select a section"
                                                    />
                                                )}
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={4} lg={4}>
                                            <Form.Item
                                                name="admissionId"
                                                label="Admission Id"
                                            >
                                                <Input placeholder="Md. Rabul" />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={4} lg={4}>
                                            <Form.Item
                                                name="queries"
                                                label="queries"
                                            >
                                                <Select
                                                    mode="multiple"
                                                    placeholder="Please select"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                    options={[
                                                        {
                                                            value: "firstName",
                                                            label: "First Name",
                                                        },
                                                        {
                                                            value: "lastName",
                                                            label: "Last Name",
                                                        },
                                                        {
                                                            value: "dateOfBirth",
                                                            label: "Birth Day",
                                                        },
                                                        {
                                                            value: "email",
                                                            label: "Email",
                                                        },
                                                        {
                                                            value: "gender",
                                                            label: "gender",
                                                        },
                                                        {
                                                            value: "religion",
                                                            label: "religion",
                                                        },
                                                        {
                                                            value: "bloodGroup",
                                                            label: "Blood",
                                                        },
                                                        {
                                                            value: "fathersName",
                                                            label: "fathersName",
                                                        },
                                                        {
                                                            value: "mothersName",
                                                            label: "fathersName",
                                                        },
                                                        {
                                                            value: "guardianName",
                                                            label: "guardianName",
                                                        },
                                                        {
                                                            value: "guardianPhone",
                                                            label: "guardianPhone",
                                                        },
                                                        {
                                                            value: "guardianRelation",
                                                            label: "guardianRelation",
                                                        },
                                                        {
                                                            value: "presentAddress",
                                                            label: "presentAddress",
                                                        },
                                                        {
                                                            value: "permanentAddress",
                                                            label: "permanentAddress",
                                                        },
                                                    ]}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={4} lg={4}>
                                            <Form.Item label=" ">
                                                <Button
                                                    type="primary"
                                                    danger
                                                    htmlType="submit"
                                                >
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </Col>
            <Col xs={24} md={24} lg={24}>
                <Table dataSource={students} columns={columns} />
            </Col>
        </Row>
    );
}
