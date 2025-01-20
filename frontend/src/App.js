import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AptitudeTestPage from './pages/AptitudeTestPage/AptitudeTestPage';
import ArticleNews from './pages/ArticleNews/ArticleNews';
import PrepAccess from './pages/PrepAccess/PrepAccess';
import ContactUs from './pages/ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionDisplay from './pages/Test/QuestionDisplay';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SubmitPage from './pages/Test/SubmitPage';
import Test from './pages/Test/Test';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aptitude-test' element={<AptitudeTestPage />} />
        <Route path='/ArticleNews' element={<ArticleNews />} />
        <Route path='/PrepAccess' element={<PrepAccess />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Test' element={<Test />} />
        <Route path='/questions' element={<QuestionDisplay />} />
        <Route path='/submit' element={<SubmitPage />} />
      </Routes>
    </Router>
  );
}

export default App;
