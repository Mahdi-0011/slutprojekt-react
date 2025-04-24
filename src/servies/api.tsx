import { useEffect, useState } from 'react';
import Card from '../components/card/card';
import "./api.scss"
type searchTermProps = {
  searchTerm: string;
}
type BookProps = {
  title: string;
  first_publish_year: number;
  key: string;
};

const DataFetcher = ({searchTerm}: searchTermProps) => {
  const [data, setData] = useState<BookProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&sort=title`);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setData(data.docs.slice(0, 30));
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
        <div className='card-grid'>
          {data.map((item) => (
            <Card key={item.key} book={item}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
