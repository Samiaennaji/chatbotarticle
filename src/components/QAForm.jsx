import React from "react";
import { Input, Button } from "antd";

export default function QAForm({ question, onQuestionChange, onSubmit }) {
    return (
        <div style={{ marginTop: 20 }}>
            <Input
                placeholder="Posez une question sur l'article..."
                value={question}
                onChange={(e) => onQuestionChange(e.target.value)}
                style={{ marginBottom: 10 }}
            />
            <Button type="primary" onClick={onSubmit}>Poser la question</Button>
        </div>
    );
}
