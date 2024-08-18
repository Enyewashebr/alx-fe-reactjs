import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue", fontSize: "24px", marginBottom: "5px" }}>
        {props.name}
      </h2>
      <p style={{ fontSize: "16px", marginBottom: "5px" }}>
        Age: <span style={{ fontWeight: "bold" }}>Age: {props.age}</span>
      </p>
      <p style={{ fontSize: "14px" }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;

