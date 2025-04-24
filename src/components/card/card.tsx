import "./card.scss";

type Book = {
  title: string;
  first_publish_year: number;
  key: string;
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
    </div>
  );
};

export default Card;
