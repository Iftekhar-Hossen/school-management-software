import React from "react";
import { Divider, Typography } from "antd";
const { Title } = Typography;

export default function PageTitle(props) {
    console.log(props)
    return (
        <Typography>
            <Title className="capitalize">{props.title}</Title>
            
        </Typography>
    );
}
