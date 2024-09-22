import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";
// import Home from "./components/Home";
// import UserProfile from "./components/UserProfile";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div>
        <div> 
          <h1>GitHub User Search</h1>


          <Search onSubmit={handleSearch} />
          {loading && <p>Loading...</p>}
          {error && <p>Looks like we can't find the user</p>}
          {userData && (
            <div>
              <img src={userData.avatar_url} alt={userData.login} />
              <p>Name: {userData.name}</p>
              <p>
                Profile: <a href={userData.html_url}>{userData.html_url}</a>
              </p>
            </div>
          )}
        </div>

        <Routes>
          {/* Define your routes here */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/user/:username" element={<UserProfile />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
