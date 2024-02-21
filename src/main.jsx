import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider  from "react-auth-kit";
import { store } from './auth/store'



ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>  

)