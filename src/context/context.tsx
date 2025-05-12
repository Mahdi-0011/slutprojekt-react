/** @format */

import { createContext, useReducer } from "react";
import { ActionType, Reducer, StateType } from "../Reducer/FavoriteReducer";


type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

const initialState: StateType = {
  Favorites: [],
  // ReviewDraft: "",
  // Review: "",
};

export const GlobalContext = createContext <ContextType | undefined>(undefined);

type ChildrenType = {
  children: React.ReactNode;
};
export default function ContextProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
