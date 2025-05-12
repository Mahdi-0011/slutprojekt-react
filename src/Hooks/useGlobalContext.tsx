import { useContext } from "react";
import { GlobalContext } from "../context/context";

export default function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a ContextProvider");
  }
  return context;
}
