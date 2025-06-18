import { createContext } from "react";

type AppContextType = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onSent: (prompt?: string) => Promise<void>;
  loading: boolean;
  result: string;
  showResult: boolean;
  userQuestion: string;
  prevPrompt: string[];
  setPrevPrompt: React.Dispatch<React.SetStateAction<string[]>>;
  newChat: () => void;
};

const AppContext = createContext<AppContextType>({
  input: "",
  setInput: () => {},
  onSent: async () => {},
  loading: false,
  result: "",
  showResult: false,
  userQuestion: "",
  prevPrompt: [],
  setPrevPrompt: () => {},
  newChat: () => {},
});

export default AppContext;
