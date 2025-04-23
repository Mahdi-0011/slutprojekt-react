import { useState } from "react";
import "./home.scss";
import DataFetcher from "../../servies/api";

export default function Home() {
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setSearchBooks([...searchBooks, query]);
      setQuery("");
    }
  };

  return (
    <>
      <div className="homepage">
        <form onSubmit={handleSearch} className="input-form">
          <input
            type="text"
            placeholder="search your book ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">search</button>
          <p>u wrote: {searchBooks}</p>
        </form>
      </div>
        <DataFetcher />
    </>
  );
}
