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
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {users && users.length > 0 && (
        <ul className="mt-4">
          {users.map((user) => (
            <li key={user.id} className="border p-2 my-2">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-8 h-8 rounded-full"
              />
              <p className="ml-2">{user.login}</p>
              <p className="ml-2 text-gray-500">Location: {user.location}</p>
              <p className="ml-2 text-gray-500">
                Repositories: {user.public_repos}
              </p>
              <a
                href={user.html_url}
                className="ml-2 text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
