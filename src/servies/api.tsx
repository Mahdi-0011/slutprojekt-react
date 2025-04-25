/** @format */

import { useEffect, useState } from "react";
import BookList from "../components/book-list/book-list";
type searchTermProps = {
  searchTerm: string;
};
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

const DataFetcher = ({ searchTerm }: searchTermProps) => {
  const [data, setData] = useState<BookProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&fields=title,author_name,first_publish_year,cover_i`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.")
      }
      const data = await response.json();
      setData(data.docs.slice(0, 24));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.")
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
        <BookList books={data} />
      )}
    </div>
  );
};

export default DataFetcher;
