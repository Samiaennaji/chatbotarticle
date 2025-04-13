import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

export default function ArticleInput({ value, onChange }) {
    return (
        <TextArea
            rows={10}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Collez votre texte ici..."
        />
    );
}
