import Card from "../card/card";
import "./book-list.scss";

type BookProps = {
  cover_i: number;
  has_fulltext: boolean;
  edition_count: number;
  title: string;
  author_name: string[];
  first_publish_year: number;
  key: string;
  ia: string[];
  author_key: string[];
  public_scan_b: boolean;
};

type BookListProps = {
  books: BookProps[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <div className="card-grid">
      {books.map((book) => (
        <Card key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
