import { useEffect, useState } from 'react';

type BookProps = {
  author_key: string[],
  author_name: string[],
  cover_edition_key: string,
  cover_i: number,
  edition_count: number,
  first_publish_year: number,
  has_fulltext: boolean,
}

const DataFetcher = () => {
  const [data, setData] = useState<BookProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setData(data.docs);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.cover_edition_key}>
              {item.author_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
