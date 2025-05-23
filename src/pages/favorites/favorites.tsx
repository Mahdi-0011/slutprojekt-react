/** @format */

import "./favorites.scss";
import useGlobalContext from "../../Hooks/useGlobalContext";
import { BookType } from "../../Types/BookType";
import Input from "../../components/review-input/review-Input";
import RatingInput from "../../components/Rating-Input/Rating";

export default function Favorites() {
  const { state, dispatch } = useGlobalContext();

  const handleRemove = (book: BookType) => {
    dispatch({ type: "remove favorite", payload: book });
  };

  // type HandleCheckboxOnChange = () => void;
  // type handelReviewChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;

  // const handleCheckboxOnChange: HandleCheckboxOnChange = () => {};
  // const handelReviewChange: handelReviewChangeType = (e) => {
  //   dispatch({ type: "set ReviewDraft", payload: e.target.value});
  // };
  // const HandelClickReview = () => {
  //   dispatch({ type: "set Review", payload: state.ReviewDraft});
  //   dispatch({ type: "set ReviewDraft", payload: ""});
  // };

  return (
    <div>
      <div>
      <h4>Your favorite books: {"tittle"},{state.Favorites.length}</h4>
        <h4>
          Books you read: {"The old man and the sea"},{"1"}
        </h4>
        <h4>pages you read: {"78"}</h4>
      </div>
      <div className='favorites-list'>
        {state.Favorites.map((book) => (
          <div className='favorite-card' key={book.cover_i}>
            <img
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : "/images/placeholder.jpg"
              }
              alt='book-cover'
              className='book-image'
            />
            <h4>{book.title}</h4>
            <p>
              <strong>Author:</strong> {book.author_name?.join(", ")}
            </p>
            <p>
              <strong>First published:</strong> {book.first_publish_year}
            </p>
            <button onClick={() => handleRemove(book)} className='favorite-btn'>
              💔
            </button>
            <Input />
            <RatingInput />
            {/* <div>
              <div>
                Read:
                <input type="checkbox" onChange={handleCheckboxOnChange} />
              </div>
              <div>
                <input
                  type="number"
                  placeholder=" Rating ..."
                  className="rating-input"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder=" Amount ..."
                  className="numberofpages-inout"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" Review ..."
                  className="review-inout"
                  value={state.ReviewDraft}
                  onChange={handelReviewChange}
                />
              </div>
              <button onClick={HandelClickReview}>save</button>
              <button>Delete</button>
              <button>Edite</button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
