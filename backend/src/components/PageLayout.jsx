import React, { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { Link, Outlet } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AliwangwangOutlined,
    FullscreenExitOutlined,
    FullscreenOutlined,
    AppstoreOutlined,
    MailOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button } from "antd";
import Menubar from "./Menubar";

const { Header, Sider, Content } = Layout;
export default function PageLayout() {
    const handle = useFullScreenHandle();
const resetWebsite = ()=>{
    localStorage.clear()
}
    console.log(handle);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
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
                        <Button
                            type="primary"
                            shape="circle"
                            className="bg-blue-600"
                            onClick={() =>
                                handle.active ? handle.exit() : handle.enter()
                            }
                            icon={
                                handle.active ? (
                                    <FullscreenExitOutlined />
                                ) : (
                                    <FullscreenOutlined />
                                )
                            }
                        />

                        <Button type="primary"
                            className="bg-blue-600" onClick={resetWebsite}>Reset</Button>

                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: "trigger bg-white",
                                onClick: () => setCollapsed(!collapsed),
                            },
                        )}
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
