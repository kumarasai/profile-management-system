
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createProfile, updateProfile, getProfileById } from '../services/profileApi';
import './ProfileForm.css'

const ProfileForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();  // Fetching the profile id from the URL
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [nameError, setNameError] = useState('');  // State for name error
  const [emailError, setEmailError] = useState('');  // State for email error
  const [isEditMode, setIsEditMode] = useState(false);  // Track if we are in edit mode

  // Fetch profile details when editing
  useEffect(() => {
    if (id) {
      setIsEditMode(true);  // Set edit mode to true
      const fetchProfile = async () => {
        const profile = await getProfileById(id);  // Fetch profile details by ID
        setName(profile.name);  // Set initial form values
        setEmail(profile.email);
        setAge(profile.age || '');
      };
      fetchProfile();
    }
  }, [id]);  // Run this effect when the `id` changes


  const validateForm = (): boolean => {
    let valid = true;

    // Clear previous errors
    setNameError('');
    setEmailError('');

    // Validate name
    if (!name.trim()) {
      setNameError('Name is required');
      valid = false;
    }

    // Validate email
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
      // You can add other fields as needed
    };

    if (isEditMode) {
      // If in edit mode, update the profile
      await updateProfile(id as string, profileData);
    } else {
      // If in create mode, create a new profile
      await createProfile(profileData);
    }

    // Redirect to the profile list after submission
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

