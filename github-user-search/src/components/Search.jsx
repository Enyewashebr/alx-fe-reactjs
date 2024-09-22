import React, { useState } from "react";

function Search({ onSubmit, users, loading, error }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, location, minRepos });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>Looks like we can't find the user. Please try again.</p>}

      {users && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <img src={user.avatar_url} alt={user.login} />
              <p>{user.login}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
