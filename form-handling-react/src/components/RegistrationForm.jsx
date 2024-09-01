import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!username) {
      setErrors({ ...errors, username: "Username is required" });
      return;
    }
    if (!email) {
      setErrors({ ...errors, email: "Email is required" });
      return;
    }
    if (!password) {
      setErrors({ ...errors, password: "Password is required" });
      return;
    }

    // Clear any previous errors
    setErrors({});

    // Handle form submission
    // You can proceed with form submission logic here
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
      {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}

      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
