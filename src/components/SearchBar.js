import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [bookSearch, setBookSearch] = useState("");

  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(bookSearch);
      setBookSearch("");
    }}
  >
    <input
      type="text"
      placeholder="Book..."
      value={bookSearch}
      onChange={(e) => setBookSearch(e.target.value)}
    />
    <input type="submit" value="Agregar" />
  </form>
  );
}
