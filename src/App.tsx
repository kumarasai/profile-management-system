// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';
import ProfileList from './components/ProfileList';
import ProfileForm from './components/ProfileForm';
import ProfileDisplay from './components/ProfileDisplay';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <ProfileProvider>
      
        <Routes>
          <Route path="/" element={<ProfileList />} />
          <Route path="/create" element={<ProfileForm />} />
          <Route path="/profile/:id" element={<ProfileDisplay />} />
          
          <Route path="/profile/edit/:id" element={<ProfileForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </ProfileProvider>
  );
};

export default App;
