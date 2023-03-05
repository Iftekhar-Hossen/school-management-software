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
    Select,
    InputNumber,
} from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
const { TextArea } = Input;

export default function AddStudent() {
    const { session, auth } = useSelector((data) => data);
    const [classes, setClasses] = useState(null);
    const [sections, setSections] = useState(null);
    const [form] = Form.useForm();
    const selectedSession = Form.useWatch("session", form);
    const selectedClass = Form.useWatch("class", form);

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
        axios
            .post("http://localhost:8000/v1/academic/student", values, {
                headers: {
                    token: auth.token
                },
            })
            .then((res) => {
                console.log(
                    "🚀 ~ file: AddStudent.jsx:81 ~ onFinish ~ res",
                    res,
                );
        message.success("Submit success!");

            })
            .catch((error) => {
                console.log(auth.token)
                console.log(
                    "🚀 ~ file: AddStudent.jsx:81 ~ onFinish ~ error",
                    error,
                );
            });
    };

    const onFinishFailed = () => {
        message.error("Submit failed!");
    };

    return (
        <div>
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
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    dateOfBirth: "",
                    fathersName: "",
                    mothersName: "",
                    email: "",
                    gender: "",
                    religion: "",
                    bloodGroup: "",
                    guardianName: "",
                    guardianEmail: "",
                    guardianPhone: "",
                    guardianRelation: "",
                    presentAddress: "",
                    permanentAddress: "",
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
                                    <Col xs={24} sm={24} md={6} lg={6}>
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
                                                            session.length - 1
                                                        ]
                                                    }
                                                    placeholder="Select a session"
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
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
                                    <Col xs={24} sm={24} md={6} lg={6}>
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
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="admissionId"
                                            label="Admission Id"
                                            rules={[
                                                {
                                                    type: "number",
                                                    required: true,
                                                    message:
                                                        "Please enter admission id!",
                                                },
                                            ]}
                                        >
                                            <InputNumber placeholder="2431353235" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="classRoll"
                                            label="Class roll"
                                            rules={[
                                                {
                                                    type: "number",
                                                    required: true,
                                                    message:
                                                        "Please enter class roll!",
                                                },
                                            ]}
                                        >
                                            <InputNumber placeholder="1" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Card
                                title="Basic information"
                                bordered={true}
                                bodyStyle={{ paddingBottom: 0 }}
                            >
                                <Row gutter={[16]}>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"firstName"}
                                            label="First name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter first name",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"lastName"}
                                            label="Last name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter last name",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Islam" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="phoneNumber"
                                            label="Phone Number"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your phone number!",
                                                },
                                            ]}
                                        >
                                            <Input
                                                addonBefore="+880"
                                                placeholder="1533501236"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="dateOfBirth"
                                            label="Date of birth"
                                            rules={[
                                                {
                                                    type: "object",
                                                    required: true,
                                                    message:
                                                        "Please select birth date!",
                                                },
                                            ]}
                                        >
                                            <DatePicker
                                                className="w-full"
                                                placeholder="2000-12-13"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"fathersName"}
                                            label="Father's name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Kawser Islam" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"mothersName"}
                                            label="Mother's name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Morium Begum" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"email"}
                                            label="Email address"
                                            tooltip="This is a required field"
                                        >
                                            <Input placeholder="md.rabul@gmail.com" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"gender"}
                                            label="Gender"
                                            tooltip="This is a required field"
                                        >
                                            <Select
                                                placeholder="Gender"
                                                options={[
                                                    {
                                                        value: "male",
                                                        label: "Male",
                                                    },
                                                    {
                                                        value: "female",
                                                        label: "Female",
                                                    },
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"religion"}
                                            label="Religion"
                                            tooltip="This is a required field"
                                        >
                                            <Select
                                                placeholder="Religion"
                                                options={[
                                                    {
                                                        value: "islam",
                                                        label: "Islam",
                                                    },
                                                    {
                                                        value: "hinduism",
                                                        label: "Hinduism",
                                                    },
                                                    {
                                                        value: "buddhism",
                                                        label: "Buddhism",
                                                    },
                                                    {
                                                        value: "christianity",
                                                        label: "Christianity",
                                                    },
                                                    {
                                                        value: "other",
                                                        label: "Other",
                                                    },
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"bloodGroup"}
                                            label="Blood group"
                                            tooltip="This is a required field"
                                        >
                                            <Select
                                                placeholder="Gender"
                                                options={[
                                                    {
                                                        value: "a+",
                                                        label: "A+",
                                                    },
                                                    {
                                                        value: "a-",
                                                        label: "A-",
                                                    },
                                                    {
                                                        value: "b+",
                                                        label: "B+",
                                                    },
                                                    {
                                                        value: "b-",
                                                        label: "B-",
                                                    },
                                                    {
                                                        value: "o+",
                                                        label: "O+",
                                                    },
                                                    {
                                                        value: "o-",
                                                        label: "O-",
                                                    },
                                                    {
                                                        value: "ab+",
                                                        label: "AB+",
                                                    },
                                                    {
                                                        value: "ab-",
                                                        label: "AB-",
                                                    },
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Card
                                title="Guardian information"
                                bordered={true}
                                bodyStyle={{ paddingBottom: 0 }}
                            >
                                <Row gutter={[16]}>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"guardianName"}
                                            label="Guardian name"
                                            tooltip="This is a required field"
                                            required
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please enter first name",
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Md. Rabul" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="guardianPhone"
                                            label="guardian Number"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your phone number!",
                                                },
                                            ]}
                                        >
                                            <Input
                                                addonBefore="+880"
                                                placeholder="1533501236"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="guardianEmail"
                                            label="Guardian Email"
                                        >
                                            <Input placeholder="abdul@gmail.com" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name={"guardianRelation"}
                                            label="Relation with guardian"
                                            tooltip="This is a required field"
                                        >
                                            <Select
                                                placeholder="Religion"
                                                options={[
                                                    {
                                                        value: "father",
                                                        label: "Father",
                                                    },
                                                    {
                                                        value: "mother",
                                                        label: "Mother",
                                                    },
                                                    {
                                                        value: "brother",
                                                        label: "Brother",
                                                    },
                                                    {
                                                        value: "Sister",
                                                        label: "Sister",
                                                    },
                                                    {
                                                        value: "other",
                                                        label: "Other",
                                                    },
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Card
                                title="Address information"
                                bordered={true}
                                bodyStyle={{ paddingBottom: 0 }}
                            >
                                <Row gutter={16}>
                                    <Col xs={24} sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name="presentAddress"
                                            label="Present Address"
                                            rules={[
                                                {
                                                    type: "string",
                                                    required: true,
                                                    message:
                                                        "Please enter present address!",
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                style={{
                                                    height: 50,
                                                }}
                                                placeholder="can resize"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12}>
                                        <Form.Item
                                            name="permanentAddress"
                                            label="Permanent Address"
                                            rules={[
                                                {
                                                    type: "string",
                                                    required: true,
                                                    message:
                                                        "Please enter permanent address!",
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                style={{
                                                    height: 50,
                                                }}
                                                placeholder="can resize"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} md={24} lg={24}>
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                className="bg-[#1677ff]"
                                                htmlType="submit"
                                            >
                                                Save Data
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    );
}
