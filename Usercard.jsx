import React from 'react';

function UserCard({ img, name, position }) {
  return (
    <div className="p-4 bg-amber-50 rounded-xl shadow text-center">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 text-sm">{position}</p>
    </div>
  );
}

export default UserCard;
