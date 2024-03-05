import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// You can choose the style theme that suits your application
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeDisplayProps {
  codeString: string;
  language?: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({
  codeString,
  language = "typescript",
}) => {
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
