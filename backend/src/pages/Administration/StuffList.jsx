import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Row, Col } from "antd";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useSelector } from "react-redux";

const columns = [
    {
        title: "Full Name",
        key: "firstName",
        render: (_, record) => record.firstName + " " + record.lastName,
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Phone",
        dataIndex: "phoneNumber",
        key: "phone",
    },
    {
        title: "Address",
        dataIndex: "presentAddress",
        key: "presentAddress",
    },
    {
        title: "Role",
        key: "role",
        dataIndex: "role",
        render: (_, record) =>
            record.role.map((role) => <Tag color="success">{role}</Tag>),
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a>Delete</a>
            </Space>
        ),
    },
];

export default function StuffList() {
    const [dataSource, setDataSource] = useState([]);
    const { auth } = useSelector((auth) => auth);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/v1/admin/admin-list`, {
                headers: {
                    token: auth.token,
                },
            })
            .then((res) => {
                setDataSource(res.data.data);
                // setDataSource([res.data.data]);
            })
            .catch((error) => {
                // console.log(error);
            });
    }, []);
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
                <PageTitle title="Stuffs List" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
                <Table
                    size="small"
                    bordered={true}
                    pagination={false}
                    columns={columns}
                    dataSource={dataSource}
                    scroll={{
                        x: "calc(700px + 50%)",
                    }}
                />
            </Col>
        </Row>
    );
}
