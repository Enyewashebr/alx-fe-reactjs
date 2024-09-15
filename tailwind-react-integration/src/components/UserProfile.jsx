import React from "react";
import PropTypes from "prop-types";

const UserProfile = ({ user }) => {
  return (
    <div className="max-w-xs sm:max-w-sm mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
      <img
        src={user.profileImage}
        alt={`${user.name}'s profile`}
        className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mx-auto mb-4"
      />
      <h1 className="text-lg sm:text-xl font-semibold text-center mb-2">
        {user.name}
      </h1>
      <p className="text-sm sm:text-base text-gray-600 text-center">
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
