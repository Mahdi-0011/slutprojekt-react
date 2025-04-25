import "./card.scss";

type Book = {
  cover_i:            number;
  has_fulltext:       boolean;
  edition_count:      number;
  title:              string;
  author_name:        string[];
  first_publish_year: number;
  key:                string;
  ia:                 string[];
  author_key:         string[];
  public_scan_b:      boolean;
};

type BookCardProps = {
  book: Book;
};

const Card: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="card">
            <img 
      src={book.cover_i 
       ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
      : "/images/placeholder.jpg"} 
      alt="books-img" 
      className="book-image" 
      />
      <br />
      <br />
      <button className="favorite-btn">❤️</button>
      <br />
      <br />
      <h4>Title: {book.title}</h4>
      <br />
      <p><strong>First published:</strong> {book.first_publish_year}</p>
      <br />
      <p><strong>Author name:</strong>{book.author_name}</p>
    </div>
  );
};

export default Card;
