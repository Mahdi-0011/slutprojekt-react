
import { BookType } from "../Types/BookType";

export type StateType = {
  Favorites: BookType[];
};
export type ActionType = {
  type: "add to favorite" | "remove favorite";
  payload: BookType;
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