
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createProfile, updateProfile, getProfileById } from '../services/profileApi';
import './ProfileForm.css'

const ProfileForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [nameError, setNameError] = useState('');  
  const [emailError, setEmailError] = useState('');  
  const [isEditMode, setIsEditMode] = useState(false);  

  
  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      const fetchProfile = async () => {
        const profile = await getProfileById(id); 
        setName(profile.name);  
        setEmail(profile.email);
        setAge(profile.age || '');
      };
      fetchProfile();
    }
  }, [id]); 


  const validateForm = (): boolean => {
    let valid = true;

    
    setNameError('');
    setEmailError('');

    
    if (!name.trim()) {
      setNameError('Name is required');
      valid = false;
    }

   
    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    }

    return valid;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;


    const profileData = {
      name,
      email,
      age,
      
    };

    if (isEditMode) {
     
      await updateProfile(id as string, profileData);
    } else {
      
      await createProfile(profileData);
    }

   
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isEditMode ? 'Edit Profile' : 'Create Profile'}</h3>
      <div>
        <label>Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
         {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
      </div>
      <div>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
      </div>
      <div>
        <label>Age</label>
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
      </div>
      <button type="submit">{isEditMode ? 'Update Profile' : 'Create Profile'}</button>
    </form>
  );
};

export default ProfileForm;

