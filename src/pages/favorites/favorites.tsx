import "./favorites.scss";
import useGlobalContext from "../../customHooks/useGlobalContext";
import { BookType } from "../../Types/BookType";

export default function Favorites() {
  const { state, dispatch } = useGlobalContext();

  const handleRemove = (book: BookType) => {
    dispatch({ type: "remove favorite", payload: book });
  };

  return (
    <div>
        <div className="favorites-list">
          {state.Favorites.map((book) => (
            <div className="favorite-card" key={book.cover_i}>
              <img
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "/images/placeholder.jpg"
                }
                alt="book-cover"
                className="book-image"
              />
              <br />
              <br />
              <button onClick={() => handleRemove(book)}> 💔 </button>
              <br />
              <br />
              <h4>{book.title}</h4>
              <br />
              <p>
                <strong>Author:</strong> {book.author_name?.join(", ")}
              </p>
              <br />
              <p>
                <strong>First published:</strong> {book.first_publish_year}
              </p>
            </div>
          ))}
    </div>
    </div>
  );
}
