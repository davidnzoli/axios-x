import React from 'react'; 
import LoginPage from "./authentificationn/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import AuthGuard from './authentificationn/AuthGuard';

function App() { 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/Admin' element={<AuthGuard> <Admin /> </AuthGuard>} />
          <Route path='*' element={<h1>ERROR 401</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )       
}

export default App;
