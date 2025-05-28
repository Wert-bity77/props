import React from "react";

function InfoCard({ img, title, desc }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md p-4">
      <img src={img} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

export default InfoCard;
