/** @format */

import { createContext, useReducer } from "react";
import { BookType } from "../Types/BookType";

type StateType = {
  Favorites: BookType[];
};
type ActionType = {
  type: "add to favorite" | "remove favorite";
  payload: BookType;
};

const initialState: StateType = {
  Favorites: [],
};

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export function Reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "add to favorite": {
      return {
        ...state,
        Favorites: [...state.Favorites, action.payload],
      };
    }
    case "remove favorite": {
      return {
        ...state,
        Favorites: state.Favorites.filter(
          (Favorite) => Favorite.cover_i !== action.payload.cover_i,
        ),
      };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export const GlobalContext = createContext<ContextType | undefined>(undefined);

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
