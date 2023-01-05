import { Col, Row, Form, Button, Select, AutoComplete } from "antd";
import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";

export default function StudentList() {
    const [filters, setFilters] = useState({
        class: null,
        section: null,
        session: null,
        studentId: null,
    });

    useEffect(() => {
        setFilters({
            ...filters,
            class: [
                {
                    value: "jack",
                    label: "Jack",
                },
                {
                    value: "lucy",
                    label: "Lucy",
                },
                {
                    value: "tom",
                    label: "Tom",
                },
            ],
        });
    }, []);

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };

    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <PageTitle title="student List" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Form layout={"vertical"}>
                        <Form.Item
                            label="Class"
                            rules={[
                                {
                                    required: true,
                                    message: "Missing area",
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a class"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                disabled={filters.class !== null ? false : true}
                                options={filters.class}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Section"
                            rules={[
                                {
                                    required: true,
                                    message: "Missing area",
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a section"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                disabled={filters.class !== null ? false : true}
                                options={filters.class}
                            />
                        </Form.Item>
                        <Form.Item label="Session">
                            <Select
                                showSearch
                                placeholder="Select a session"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                disabled={filters.class !== null ? false : true}
                                options={filters.class}
                            />
                        </Form.Item>
                        <Form.Item label="studentId">
                            <AutoComplete
                                disabled={
                                    filters.session !== null ? false : true
                                }
                                placeholder="input placeholder"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
}
