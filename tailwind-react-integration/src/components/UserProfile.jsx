import React from "react";
import PropTypes from "prop-types";

const UserProfile = ({ user }) => {
  return (
    <div className=" sm:max-w-xs md:max-w-sm sm:p-4 md:p-8 bg-white shadow-lg rounded-lg">
      <img
        src={user.profileImage}
        alt={`${user.name}'s profile`}
        className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4"
      />
      <h1 className=" sm:text-lg md:text-xl font-semibold text-center mb-2">
        {user.name}
      </h1>
      <p className="sm:text-sm md:text-base text-gray-600 text-center">
        {user.bio}
      </p>
    </div>
  );
};

// PropTypes validation
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,

    bio: PropTypes.string,
  }).isRequired,
};

export default UserProfile;
