import React from "react";
import { Card, Typography } from "antd";
const { Text } = Typography;

export default function SummaryDisplay({ summary }) {
    return (
        <Card title="📝 Résumé généré">
            <Text>{summary || "Aucun résumé pour l'instant."}</Text>
        </Card>
    );
}
