import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage.js';
import AuthPage from './pages/AuthPage/AuthPage.js';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage.js';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
