import "./favorites.scss";
import useGlobalContext from "../../customHooks/useGlobalContext";

export default function Favorites() {
  const { state } = useGlobalContext();

  return (
    <>
      <div className="favorites-page">
        <h2>Favorites</h2>
        <p>This is my favorites page</p>

        {state.Favorites.length === 0 ? (
          <p>No favorites yet 😢</p>
        ) : (
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
                <h4>{book.title}</h4>
                <p>
                  <strong>Author:</strong> {book.author_name?.join(", ")}
                </p>
                <p>
                  <strong>First published:</strong> {book.first_publish_year}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
