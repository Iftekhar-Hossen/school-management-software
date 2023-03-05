import React, { useState } from "react";
import { Tag } from "antd";
const { CheckableTag } = Tag;
const tagsData = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
export default function MonthlySelector() {
    const [selectedTags, setSelectedTags] = useState([]);
    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };
    return (
        <>
            <span
                style={{
                    marginRight: 8,
                }}
            >
                Categories:
            </span>
            {tagsData.map((tag) => (
                <Tag.CheckableTag
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={(checked) => handleChange(tag, checked)}
                >
                    {tag}
                </Tag.CheckableTag>
            ))}
        </>
    );
}
