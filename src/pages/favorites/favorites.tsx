import "./favorites.scss";
import useGlobalContext from "../../customHooks/useGlobalContext";
import { BookType } from "../../Types/BookType";

export default function Favorites() {
  const { state, dispatch } = useGlobalContext();

  const handleRemove = (book: BookType) => {
    dispatch({ type: "remove favorite", payload: book });
  };

  type HandleCheckboxOnChange = () => void;
  const handleCheckboxOnChange: HandleCheckboxOnChange = () => {};
  
  return (
    <div>
      <div>
        <h4>Books you read: {"lord of the rings, hello"}___how many books:{5}</h4>
        <h4>pages you read: {5}</h4>
      </div>
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
              <button 
              onClick={() => handleRemove(book)}
              className="favorite-btn"
              > 💔 </button>
              <div>
              <div>
              Read:
              <input type="checkbox" 
              onChange={handleCheckboxOnChange}
              />
              </div>
              <div>
              <input type="number"
              placeholder=" Rating ..."
              className="rating-input" />
              </div>
              <div>
              <input type="number"
              placeholder=" Amount ..."
              className="numberofpages-inout" />
              </div>
              <div>
              <input type="text"
              placeholder=" Review ..."
              className="review-inout" />
              </div>
              <button>save</button>
              <button>Delete</button>
              <button>Edite</button>
              </div>
            </div>
          ))}
    </div>
    </div>
  );
}
