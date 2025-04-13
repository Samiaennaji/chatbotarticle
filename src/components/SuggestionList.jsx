import React from "react";
import { List, Typography } from "antd";

export default function SuggestionsList({ urls }) {
    return (
        <List
            header={<div>🌐 Suggestions de lecture</div>}
            bordered
            dataSource={urls}
            renderItem={(item) => (
                <List.Item>
                    <a href={item} target="_blank" rel="noreferrer">{item}</a>
                </List.Item>
            )}
        />
    );
}
