import ReactMarkdown from "react-markdown";
import savesContent from "../personal-saves.md?raw";

export default function Saves() {
    return <ReactMarkdown>{savesContent}</ReactMarkdown>;
}
