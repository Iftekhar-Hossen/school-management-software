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

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
let items = [
    getItem(<Link to={"/"}>Dashboard</Link>, "dashboard", <MailOutlined />),
    getItem("Students", "students", <AliwangwangOutlined />, [
        getItem("Students List", "st1"),
        getItem(<Link to={"/students/add"}>Add Teacher</Link>, "student2"),
    ]),
    getItem("Teachers", "teachers", <AppstoreOutlined />, [
        getItem(<Link to={"/teachers"}>Teachers List</Link>, "teachers1"),
        getItem(<Link to={"/teachers/add"}>Add Teacher</Link>, "teachers2"),
    ]),
    getItem("Academics", "academics", <AppstoreOutlined />, [
        getItem(<Link to={"/academics/class"}>Class</Link>, "academics1"),
        getItem(
            <Link to={"/academics/grading-system"}>Grading system</Link>,
            "academics2",
        ),
    ]),
    getItem("Accounting", "accounting", <AppstoreOutlined />, [
        getItem(<Link to={"/accounting/pay-fees"}>Fees</Link>, "accounting1"),
        getItem(
            <Link to={"/accounting/fees-type"}>Fees Type</Link>,
            "accounting2",
        ),
    ]),
];

const { Header, Sider, Content } = Layout;
export default function PageLayout() {
    const handle = useFullScreenHandle();

    console.log(handle);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <FullScreen handle={handle}>
            <Layout>
                <Sider
                    collapsed={collapsed}
                    className="relative bg-black"
                    width={250}
                >
                    <Menu
                        theme="dark"
                        className="h-screen overflow-y-scroll"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={items}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
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

                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: "trigger",
                                onClick: () => setCollapsed(!collapsed),
                            },
                        )}
                    </Header>
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280,
                            height: "100vh",
                            overflowY: "scroll",
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </FullScreen>
    );
}
