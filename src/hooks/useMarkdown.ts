import { useContext } from "react";
import { MarkdownContext } from "../contexts/MarkDownContext";

export const useMarkdown = () => {
  const context = useContext(MarkdownContext);
  if (!context) {
    throw new Error("useMarkdown must be used within a MarkdownProvider");
  }
  return context;
};
