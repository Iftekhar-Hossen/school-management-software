import {
    Row,
    Col,
    Card,
    Form,
    Input,
    Tabs,
    Button,
    Table,
    Modal,
    TimePicker,
    Select,
    Switch,
    Tag,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;

const columns = [
    {
        title: "Subject",
        dataIndex: "subject",
        key: "subject",
    },
    {
        title: "Teacher",
        dataIndex: "teacher",
        key: "teacher",
    },
    {
        title: "Start Time",
        dataIndex: "startTime",
        key: "startTime",
    },
    {
        title: "End Time",
        dataIndex: "endTime",
        key: "endTime",
    },
    {
        title: "Is Break",
        dataIndex: "isBreak",
        key: "is",
    },
    {
        title: "Action",
        render: (_) => (
            <>
                <Button onClick={(_) => console.log(_)}>+</Button>
            </>
        ),
    },
];

export default function CreateRoutine() {
    const { auth } = useSelector((data) => data);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [freeTeachers, setFreeTeachers] = useState([]);
    const [routine, SetRoutine] = useState({
        saturday: [
            {
                subject: "Bangla",
                teacher: "Rabul",
                startTime: "9:30",
                endTime: "10:00",
                isBreak: "False",
            },
            {
                subject: "English",
                teacher: "Babul",
                startTime: "10:01",
                endTime: "10:30",
                isBreak: "False",
            },
            {
                subject: "Higher Math",
                teacher: "Mamun",
                startTime: "10:31",
                endTime: "11:00",
                isBreak: "False",
            },
        ],
    });

    const [modalForm, setModalForm] = useState({
        teacherEnable: true,
        isBreak: false,
    });

    const [form] = Form.useForm();





    // const { data, isLoading } = useQuery("sessions", () =>
    //     fetch("https://jsonplaceholder.typicode.com/photos", {
    //         headers: {
    //             token: auth.token,
    //         },
    //     }).then((res) => res.json()),
    // );


    useEffect(() => {
        axios
            .get("http://localhost:8000/v1/academic/subject", {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                setSubjects(res.data.data);
                let data = res.data.data.map((d) => {
                    return {
                        label: (
                            <>
                                <div className="flex justify-between">
                                    <span>{d.name} </span>
                                    <Tag
                                        color="success"
                                        style={{ fontSize: "10px" }}
                                    >
                                        Code: {d.code}
                                    </Tag>
                                </div>
                            </>
                        ),
                        value: d._id,
                    };
                });
                setSubjects(data);
            });
        axios.get("http://localhost:8000/v1/academic/teachers").then((res) => {
            setSubjects(res.data);
        });
    }, []);

    const routineData = (day) => {
        if (routine.hasOwnProperty(day)) {
            console.log(routine.saturday);
        } else {
        }
    };

    const [visible, setVisible] = useState(false);

    const handleOpenModal = () => {
        setVisible(true);
    };

    const handleCloseModal = () => {
        setVisible(false);
    };

    const handleSubmit = (values) => {
        console.log(values);
        console.log();
    };

    const handleModalSubmit = (values) => {
        console.log({ values });
    };
 
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={6} lg={6}>
                <Card title="Class selection" bodyStyle={{ paddingBottom: 0 }}>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                    >
                        <Row gutter={[16]}>
                            <Col xs={24} sm={24} md={24} lg={24}>
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
                            <Col xs={24} sm={24} md={24} lg={24}>
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
                            <Col xs={24} sm={24} md={24} lg={24}>
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
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item style={{ width: "100%" }}>
                                    <Button
                                        type="primary"
                                        className="bg-blue-600"
                                        style={{ width: "100%" }}
                                    >
                                        Search
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>

            <Col xs={24} sm={24} md={18} lg={18}>
                <Modal
                    title="My Modal Form"
                    open={visible}
                    onOk={handleSubmit}
                    onCancel={handleCloseModal}
                    maskClosable={false}
                >
                    <Form
                        onFinish={handleModalSubmit}
                        form={form}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Subject"
                            name="subject"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your name!",
                                },
                            ]}
                        >
                            <Select
                                options={subjects}
                                placeholder="Select a subject"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Time"
                            name="time"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your name!",
                                },
                            ]}
                        >
                            <TimePicker.RangePicker
                                use12Hours
                                format="h:mm a"
                                className="w-full"
                                onChange={() =>
                                    setModalForm({
                                        ...modalForm,
                                        teacherEnable: false,
                                    })
                                }
                            />
                        </Form.Item>
                        <Form.Item
                            label="Teacher"
                            name="teacher"
                            tooltip="Teachers list filtered with subject and time range"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your name!",
                                },
                            ]}
                        >
                            <Select
                                options={teachers}
                                disabled={modalForm.teacherEnable}
                                placeholder="Select a teacher"
                            />
                        </Form.Item>
                        <Form.Item
                            label="total duration"
                            tooltip="Total duration between starting time to ending time"
                        >
                            <Input disabled value={"40min"} />
                        </Form.Item>
                        <Form.Item
                            label="Is break"
                            name="isBreak"
                            tooltip={
                                "If break is true then teacher and subject won't be add"
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your name!",
                                },
                            ]}
                        >
                            <Switch
                                onChange={(data) =>
                                    setModalForm({
                                        ...modalForm,
                                        isBreak: data,
                                    })
                                }
                                checkedChildren="true"
                                unCheckedChildren="false"
                                defaultChecked={false}
                                style={{ backgroundColor: "black" }}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
                <Card
                    title={
                        <>
                            {"Routine "}
                            <Button
                                className="ml-5"
                                onClick={handleOpenModal}
                                size="small"
                            >
                                Add
                            </Button>
                        </>
                    }
                    bodyStyle={{ padding: "0" }}
                >
                    <Tabs
                        size="small"
                        centered
                        tabPosition="left"
                        defaultActiveKey="1"
                        onChange={(ok) => routineData(ok)}
                    >
                        <TabPane className="p-0" tab="Sat" key="saturday">
                            <Table
                                bordered
                                size="small"
                                dataSource={routine.saturday}
                                columns={columns}
                            />
                        </TabPane>
                        <TabPane className="p-0" tab="Sun" key="sunday">
                            <Table
                                size="small"
                                dataSource={routineData("sunday")}
                                columns={columns}
                            />
                        </TabPane>
                        <TabPane className="p-0" tab="Mon" key="monday">
                            <Table
                                size="small"
                                dataSource={routineData("monday")}
                                columns={columns}
                            />
                        </TabPane>
                        <TabPane className="p-0" tab="Tue" key="tuesday">
                            <Table
                                size="small"
                                dataSource={routineData("tuesday")}
                                columns={columns}
                            />
                        </TabPane>
                        <TabPane className="p-0" tab="Wed" key="wednesday">
                            <Table
                                size="small"
                                dataSource={routineData("wednesday")}
                                columns={columns}
                            />
                        </TabPane>
                        <TabPane className="p-0" tab="Thu" key="thursday">
                            <Table
                                size="small"
                                dataSource={routineData("thursday")}
                                columns={columns}
                            />
                        </TabPane>
                        <TabPane className="p-0" tab="Fri" key="friday">
                            <Table
                                size="small"
                                dataSource={routineData("friday")}
                                columns={columns}
                            />
                        </TabPane>
                    </Tabs>
                </Card>
            </Col>
        </Row>
    );
}
