import { useState } from "react";
import "./home.scss";
import DataFetcher from "../../servies/api";

export default function Home() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setSearchTerm(query);
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
        </form>
      </div>
      <DataFetcher searchTerm={searchTerm} />
    </>
  );
}
