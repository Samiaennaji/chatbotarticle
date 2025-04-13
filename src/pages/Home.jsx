import React, { useState } from "react";
import ArticleInput from "../components/ArticuleInput";
import SummaryDisplay from "../components/SummaryDisplay";
import QAForm from "../components/QAForm";
import SuggestionsList from "../components/SuggestionList";

export default function Home() {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [urls, setUrls] = useState([]);

    const handleAsk = () => {
        setSummary("Résumé fictif : Lorem ipsum...");
        setAnswer("Réponse IA fictive");
        setUrls(["https://example.com", "https://openai.com"]);
    };

    return (
        <div style={{ padding: 30 }}>
            <ArticleInput value={text} onChange={setText} />
            <QAForm question={question} onQuestionChange={setQuestion} onSubmit={handleAsk} />
            <SummaryDisplay summary={summary} />
            <div style={{ marginTop: 20 }}>
                <h3>💬 Réponse :</h3>
                <p>{answer}</p>
            </div>
            <SuggestionsList urls={urls} />
        </div>
    );
}
