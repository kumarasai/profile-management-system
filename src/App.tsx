// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProfileProvider } from './context/ProfileContext';
import ProfileList from './components/ProfileList';
import ProfileForm from './components/ProfileForm';
import ProfileDisplay from './components/ProfileDisplay';

const App: React.FC = () => {
  return (
    <ProfileProvider>
      
        <Routes>
          <Route path="/" element={<ProfileList />} />
          <Route path="/create" element={<ProfileForm />} />
          <Route path="/profile/:id" element={<ProfileDisplay />} />
          {/* Add route for editing profiles */}
          <Route path="/profile/edit/:id" element={<ProfileForm />} />
        </Routes>
      
    </ProfileProvider>
  );
};

export default App;
