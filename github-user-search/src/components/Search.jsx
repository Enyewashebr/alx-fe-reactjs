import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/users?q=${searchTerm}`);
      const data = await response.json();

      if (data.length === 0) {
        setError("Looks like we can't find the user");
        setUser(null);
      } else {
        setUser(data[0]);
        setError(null);
      }
    } catch (err) {
      setError("An error occurred while searching for the user");
      setUser(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      {!user && !error && (
        <div>
          <p>Looks like we can't find the user</p>
        </div>
      )}
    </div>
  );
};

export default Search;
