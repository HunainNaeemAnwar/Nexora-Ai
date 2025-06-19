import Response from "../Gemini/gemini";
import { useState } from "react";
import AppContext from "./AppContext";

import type { ReactNode } from "react";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [prevPrompt, setPrevPrompt] = useState<string[]>([]);
  const typeAnimation = (index: number, Word: string) => {
    setTimeout(() => {
      setResult((prev) => prev + Word);
    }, index * 30);
  };
  const newChat = (): void => {
    setLoading(false);
    setShowResult(false);
  };
  const onSent = async (prompt?: string): Promise<void> => {
    const userQuestion = (prompt ?? input).trim(); 

    if (!userQuestion) return;
    setUserQuestion(userQuestion);
    setPrevPrompt((prev) =>
      prev.includes(userQuestion) ? prev : [...prev, userQuestion]
    );
    setResult("");
    setInput("");
    setShowResult(true);
    setLoading(true);

    const response = await Response(userQuestion);

    const responseArr = response?.split("**") || [];
    let responseText = "";

    for (let i = 0; i < responseArr.length; i++) {
      if (i % 2 === 0) {
        responseText += responseArr[i];
      } else {
        responseText +=
          `<b class="text-[#000000] bg-[#ffffff] inline-block my-6">` +
          responseArr[i] +
          `</b>`;
      }
    }

    const formattedResponse = responseText
      .split(/[*:\n•]+|#{3}/)

      .map((line) => line.trim())
      .filter(Boolean)
      .join("<br>");

    const formattedResponseArr = formattedResponse.split(" ");
    for (let i = 0; i < formattedResponseArr.length; i++) {
      typeAnimation(i, formattedResponseArr[i] + " ");
    }

    setLoading(false);
    console.log(response);
  };

  const contextValue = {
    onSent,
    input,
    setInput,
    loading,
    result,
    showResult,
    userQuestion,
    prevPrompt,
    setPrevPrompt,
    newChat,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default AppProvider;
