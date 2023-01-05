import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Row,
    Col,
    Typography,
    Alert,
    message,
} from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginAction } from "../app/actions/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const errorAlert = () => {
        messageApi.open({
            type: "error",
            content: "Invalid credentials",
        });
    };

    const { Title } = Typography;
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const onFinish = (values) => {
        if (
            values.emailPhoneAdministratorId == "codethousandit@gmail.com" ||
            (values.emailPhoneAdministratorId == "20231" &&
                values.password == "123456789")
        ) {
            dispatch(
                loginAction({
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvZGV0aG91c2FuZGl0QGdtYWlsLmNvbSIsImlkIjoiNjNiMTQxNTY0OWIyZjFkMzBlZGE4YmUzIiwiaWF0IjoxNjcyNTcwNDUzLCJleHAiOjE2NzI1ODg0NTN9.QuLjxhH0ROFVxeQ0NET3AeNL3LtzsqXdp5d6di82Ii4",
                    email: "codethousandit@gmail.com",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                    firstName: "Code",
                    lastName: "Thousand",
                    remember: true,
                }),
            );
            return navigate("/");
        } else {
            errorAlert();
        }

        // axios
        //     .post(
        //         `http://${window.location.hostname}:8000/v1/auth/login`,
        //         values,
        //     )
        //     .then((res) => {
        //         setError("");
        //         dispatch(
        //             loginAction({
        //                 ...res.data.data,
        //                 remember: values.remember,
        //             }),
        //         );
        //         return navigate("/");
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         setError(error.response.data.message);
        //     });
    };

    return (
        <Row justify="center">
            {contextHolder}
            <Col
                lg={6}
                md={12}
                sm={12}
                xs={20}
                className="h-screen flex flex-col justify-center"
            >
                <div className=" w-full bg-white opacity-100 p-5 rounded-lg pb-0">
                    <Title>Login</Title>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="emailPhoneAdministratorId"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please input your email or phone or id!",
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <UserOutlined className="site-form-item-icon" />
                                }
                                placeholder="Email or phone number"
                            />
                        </Form.Item>
                        <Form.Item
                            className="mb-2"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item className="mb-2 pl-1">
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                noStyle
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Link
                                className="text-[#1677ff]"
                                to="/reset-password"
                            >
                                Forgot password
                            </Link>
                        </Form.Item>

                        {error && (
                            <Form.Item className="mb-2">
                                <Alert
                                    message={error && error}
                                    type="error"
                                    showIcon
                                    closable
                                    className="py-1"
                                />
                            </Form.Item>
                        )}

                        <Form.Item>
                            <Button
                                htmlType="submit"
                                className="bg-[#1677ff]"
                                type="primary"
                                block
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};
export default Login;
