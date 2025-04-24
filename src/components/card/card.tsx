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
      <button>❤️</button>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>First published:</strong> {book.first_publish_year}</p>
      <p><strong>your fulltext:</strong>{book.public_scan_b}</p>
      <img 
      src={book.cover_i 
       ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
      : "/images/placeholder.jpg"} 
      alt="books-img" 
      className="book-image" 
      />
    </div>
  );
};

export default Card;
