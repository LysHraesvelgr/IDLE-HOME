import ReactMarkdown from "react-markdown";
import readmeContent from "../readme.md?raw";
export default function Labyrinthos() {
    return (
        <ReactMarkdown>{readmeContent}</ReactMarkdown>
        
    );
}
