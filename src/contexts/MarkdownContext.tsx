import { createContext, ReactNode, useState } from "react";
interface MarkdownContextType {
  text?: string;
  setText?: (text: string) => void;
}

export const MarkdownContext = createContext<MarkdownContextType>({});

export const MarkdownProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<string>("");
  return (
    <MarkdownContext.Provider value={{ text, setText }}>
      {children}
    </MarkdownContext.Provider>
  );
};
