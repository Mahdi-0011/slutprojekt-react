// type StateType = {
//   Favorites: number[];
// }
// type ActionType = {
//   type: "add to favorite" |
//         "remove favorite" ;
//   payload: number;
// }

// export function Reducer(state: StateType, action: ActionType) {
//   switch (action.type) {
//     case 'add to favorite': {
//       return {
//         ...state, Favorites: [...state.Favorites, action.payload]
//       };
//     }
//     case 'remove favorite': {
//       return {
//         ...state, Favorites: (state.Favorites.filter(Favorite => Favorite !== action.payload))
//       };
//     }
//     default:
//     throw Error('Unknown action: ' + action.type);
//   }
// }
