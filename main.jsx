import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import UsersList from './assets/Components/UsersList';       // ✅ Fayl nomi UsersList.jsx
import InfoCardList from './assets/Components/InfoCardList'; // ✅ Fayl nomi InfoCardList.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersList />
    <InfoCardList />
  </React.StrictMode>
);
