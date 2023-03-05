import React, { useState, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { Outlet } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FullscreenExitOutlined,
    FullscreenOutlined,
} from "@ant-design/icons";
import { Layout, Button, Row, Col } from "antd";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { sessionAction } from "../app/actions/session";
import ServerStatus from "./ServerStatus";
import Menubar from "./Menubar";

const { Header, Sider, Content } = Layout;
export default function PageLayout() {
    const { auth } = useSelector((auth) => auth);
    const dispatch = useDispatch();

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
                dispatch(sessionAction(updatedObjects));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handle = useFullScreenHandle();
    const resetWebsite = () => {
        localStorage.clear();
    };

    const [collapsed, setCollapsed] = useState(false);
    return (
        <FullScreen handle={handle}>
            <Layout>
                <Sider
                    theme="dark"
                    className="h-screen overflow-y-scroll"
                    collapsed={collapsed}
                    width={220}
                >
                    <div className="text-center">
                        <div className="text-center bg-white inline-block m-auto py-0 rounded-3xl px-5 text-black text-[26px] mb-3 font-sans font-bold mt-3">
                            Logo
                        </div>
                    </div>
                    <Menubar />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        style={{
                            height: "8vh",
                        }}
                    >
                        <Row justify={"space-between"}>
                            <Col md={12} lg={12}>
                                <Button
                                    type="primary"
                                    shape="circle"
                                    className="bg-blue-600"
                                    onClick={() =>
                                        handle.active
                                            ? handle.exit()
                                            : handle.enter()
                                    }
                                    icon={
                                        handle.active ? (
                                            <FullscreenExitOutlined />
                                        ) : (
                                            <FullscreenOutlined />
                                        )
                                    }
                                />

                                <Button
                                    type="primary"
                                    className="bg-blue-600"
                                    onClick={resetWebsite}
                                >
                                    Reset
                                </Button>

                                {React.createElement(
                                    collapsed
                                        ? MenuUnfoldOutlined
                                        : MenuFoldOutlined,
                                    {
                                        className: "trigger bg-white",
                                        onClick: () => setCollapsed(!collapsed),
                                    },
                                )}
                            </Col>
                            <Col md={12} lg={12}>
                                <ServerStatus />
                            </Col>
                        </Row>
                    </Header>
                    <Content
                        style={{
                            height: "92vh",
                            overflowY: "scroll",
                        }}
                        className="xs:p-4 sm:p-3 md:p-5 lg:p-5"
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </FullScreen>
    );
}
