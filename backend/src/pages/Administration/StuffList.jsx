import React from "react";
import { Space, Table, Tag, Row, Col } from "antd";
import PageTitle from "../../components/PageTitle";
const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Role",
        key: "role",
        dataIndex: "role",
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? "geekblue" : "green";
                    if (tag === "loser") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
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
const data = [
    {
        key: "1",
        name: "John Brown",
        phone: "01533501236",
        address: "New York No. 1 Lake Park",
        tags: ["Teacher"],
    },
    {
        key: "2",
        name: "Jim Green",
        phone: "01533501236",
        address: "London No. 1 Lake Park",
        tags: ["Head Teacher", "Super Admin"],
    },
    {
        key: "3",
        name: "Joe Black",
        phone: "01533501236",
        address: "Sidney No. 1 Lake Park",
        tags: ["Admin", "Accountant"],
    },
];

export default function StuffList() {
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
                <PageTitle title="Stuffs List" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
                <Table bordered={true} pagination={false} columns={columns} dataSource={data} />;
            </Col>
        </Row>
    );
}
