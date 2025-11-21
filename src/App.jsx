import React from 'react';
import Nav from './features/nav';
import Trends from './features/trends';
import Reasons from './features/reasons';
import Questions from './features/questions';
import Subscription from './features/subscription';
import Footer from './features/footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SignIn from "./features/signin";
import SignUp from "./features/signup";

function AppContent() {
  const location = useLocation();
  const isSignInPage = location.pathname === "/signin";

  return (
    <>
      <Routes>
       
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
       
        <Route path="*" element={
          <div className="bg-black px-30 text-white">
            <Nav />
            <Trends />
            <Reasons />
            <Questions />
            <Subscription />
            <Footer />
          </div>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;