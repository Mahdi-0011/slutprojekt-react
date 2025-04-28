import { createContext, useReducer } from "react";
import { Reducer } from "../Reducer/FavoriteReducer";



const GlobalContext = createContext<favorite[]>("");

type initialStateType = {
  favorite: [];
}
const initialState: initialStateType = {
  favorite: [],
};

type ChildrenType = {
  children: React.ReactNode;
}
export default function ContextProvider({ children } : ChildrenType) {
  const [state, dispatch] = useReducer(Reducer, initialState)


  return (
    <GlobalContext.Provider value={ state, dispatch }>
      {children}
    </GlobalContext.Provider>
  );
}




