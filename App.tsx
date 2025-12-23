
import React, { useLayoutEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
import DiscoverPage from './pages/DiscoverPage';
import SubmitGamePage from './pages/SubmitGamePage';
import DeveloperGuidePage from './pages/DeveloperGuidePage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AdminDashboard from './pages/AdminDashboard';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:id" element={<GameDetailPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/submit" element={<SubmitGamePage />} />
          <Route path="/guide" element={<DeveloperGuidePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}
