import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { useMarkdown } from "../../../hooks/useMarkdown";

const MarkdownEditor = () => {
  const { text, setText } = useMarkdown();
  return (
    <MdEditor
      language="en-US"
      codeTheme="github"
      previewTheme="github"
      modelValue={text!}
      onChange={setText}
      toolbarsExclude={["github", "preview", "htmlPreview"]}
      preview={true}
    />
  );
};

export default MarkdownEditor;
