import { createContext } from "react";

export const MessageContext = createContext({});

export function MessageProvider({ children }) {
  const message = "you're cool!";
  const contextValue = {
    contextMessage: message,
  };

  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
}
