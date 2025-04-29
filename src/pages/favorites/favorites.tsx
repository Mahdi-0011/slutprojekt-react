
import "./favorites.scss";
import useGlobalContext from "../../customHooks/useGlobalContext";

export default function Favorites() {
  const { state } = useGlobalContext();
  return (
    <>
      <div>favorites</div>
      <p>this is my favoritespage</p>
      <p>{state.Favorites}</p>
    </>
  );
}

