import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router";
import Test from './components/Test';
import ContactUs from './Pages/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AptitudeTestPage from './Pages/AptitudeTestPage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/aptitude-test' element={<AptitudeTestPage/>}/>
      <Route path='/Test' element={<Test />} />
      <Route path='/ContactUs' element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
