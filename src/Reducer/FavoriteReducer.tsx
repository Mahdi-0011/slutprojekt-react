
import { BookType } from "../Types/BookType";

export type StateType = {
  Favorites: BookType[];
  ReviewDraft: string;
  Review: string;
};
export type ActionType = 
| { type: "add to favorite"; payload: BookType } 
| { type: "remove favorite"; payload: BookType } 
| { type: "set ReviewDraft"; payload: string }  
| { type: "set Review"; payload: string }; 


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
    case "set ReviewDraft": {
      return {
        ...state,
        ReviewDraft: action.payload,
      };
    }
    case "set Review": {
      return {
        ...state,
        Review: action.payload,
      };
    }
    default:
      throw Error("Unknown action: " + action);
  }
}
