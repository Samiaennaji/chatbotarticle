import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000", // ton backend plus tard
});

export const generateSummary = (text) => API.post("/generate-summary", { text });
export const askQuestion = (text, question) => API.post("/ask", { text, question });
