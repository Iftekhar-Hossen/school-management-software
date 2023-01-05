import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import React from "react";

export default function PageNotFound() {
    return (
        <Result
            className="bg-white h-screen"
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Link to="/">
                    <Button className="bg-blue-600" type="primary">
                        Back Dashboard
                    </Button>
                </Link>
            }
        />
    );
}
