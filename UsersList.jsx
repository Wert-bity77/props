import React from 'react';
import UserCard from './Usercard.jsx';

function UsersList() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-8 text-center">User Card</h1>
      <div className="grid grid-cols-4 gap-x-8 gap-y-16">
        <UserCard img="https://randomuser.me/api/portraits/women/1.jpg" name="Emily Johnson" position="Product Manager" />
        <UserCard img="https://randomuser.me/api/portraits/men/2.jpg" name="Arjun Patel" position="Software Engineer" />
        <UserCard img="https://randomuser.me/api/portraits/men/3.jpg" name="Carlos Hernández" position="UI Designer" />
        <UserCard img="https://randomuser.me/api/portraits/women/4.jpg" name="Amina Idris" position="Marketing Specialist" />
        <UserCard img="https://randomuser.me/api/portraits/men/5.jpg" name="Takumi Sato" position="HR Specialist" />
        <UserCard img="https://randomuser.me/api/portraits/men/6.jpg" name="Chen Wei" position="Data Analyst" />
        <UserCard img="https://randomuser.me/api/portraits/women/7.jpg" name="Emma Dubois" position="Sales Manager" />
        <UserCard img="https://randomuser.me/api/portraits/men/8.jpg" name="Igor Sokolov" position="Quality Assurance" />
      </div>
    </div>
  );
}

export default UsersList;
