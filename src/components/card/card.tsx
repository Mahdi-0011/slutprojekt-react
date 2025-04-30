/** @format */

import useGlobalContext from "../../customHooks/useGlobalContext";
import { BookType } from "../../Types/BookType";
import "./card.scss";

type BookCardProps = {
  book: BookType;
};

const Card: React.FC<BookCardProps> = ({ book }) => {
  const { state, dispatch } = useGlobalContext();
  const isFavorite = state.Favorites.some(
    (favorite) => favorite.cover_i === book.cover_i,
  );

  const toggleFavorite = () => {
    if (isFavorite) dispatch({ type: "remove favorite", payload: book });
    else {
      dispatch({ type: "add to favorite", payload: book });
    }
  };

  return (
    <div className="card">
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "/images/placeholder.jpg"
        }
        alt="books-img"
        className="book-image"
      />
      <br />
      <br />
      <button className="favorite-btn" onClick={toggleFavorite}>
        {isFavorite ? "💔 Remove" : "❤️ Favorite"}
      </button>
      <br />
      <br />
      <h4>Title: {book.title}</h4>
      <br />
      <p>
        <strong>First published:</strong> {book.first_publish_year}
      </p>
      <br />
      <p>
        <strong>Author name:</strong>
        {book.author_name}
      </p>
    </div>
  );
};

export default Card;
