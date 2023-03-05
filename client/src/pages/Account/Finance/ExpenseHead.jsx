
import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Card,
    Button,
    Select,
    Form,
    Input,
    Table,
    Tag,
    Radio,
} from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
const { Option } = Select;

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Action",
        dataIndex: "action",
        key: Math.random(),
        responsive: ["md"],
    },
];



export default function ExpenseHead() {
    const {auth} = useSelector((data)=> data)
    const [update, setUpdate] = useState(false)
    const [expense, setExpense] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/v1/accounts/finance/expense-head", {
            headers:{
                token: auth.token
            }
        }).then((res)=>{
            setExpense(res.data.data)
        }).catch((error) => {
            console.log("🚀 ~ file: ExpenseHead.jsx:58 ~ useEffect ~ error", error)
            return {
        }
            
        })
    }, [update])

    const onFinish = (values) => {
        console.log("Success:", values);
        axios.post("http://localhost:8000/v1/accounts/finance/expense-head",values, {
            headers:{
                token: auth.token
            }
        }).then((res)=>{
            setUpdate(!update)
        }).catch((error) => {
            console.log("🚀 ~ file: ExpenseHead.jsx:69 ~ onFinish ~ error", error)
            return {
        }
            
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


  return (
    <Row gutter={[16, 16]}>
    <Col xs={24} sm={24} md={8} lg={8}>
        <Card title={"Expense Head"} bodyStyle={{ paddingBottom: 0 }}>
            <Form
                layout="vertical"
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Expense Head name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please enter fee name!",
                        },
                    ]}
                >
                    <Input placeholder="Bank" />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        className="bg-[#1677ff]"
                        htmlType="submit"
                    >
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </Col>
    <Col xs={24} sm={24} md={16} lg={16}>
        <Card title={"Expense Head List"}>
            <Table
                size="small"
                bordered={true}
                pagination={false}
                dataSource={expense}
                columns={columns}
            />
        </Card>
    </Col>
</Row>
  )
}
