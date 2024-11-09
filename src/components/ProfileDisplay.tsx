// src/components/ProfileDisplay.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProfileById, updateProfile, deleteProfile } from '../services/profileApi';
import './ProfileDisplay.css'

const ProfileDisplay: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (id) {
        const data = await getProfileById(id);
        setProfile(data);
      }
    };

    fetchProfile();
  }, [id]);

  const handleDelete = async () => {
    if (id) {
      await deleteProfile(id); // Delete the profile by ID
      navigate('/');  // Navigate to home after deletion
    }
  };

  const handleEdit = () => {
    navigate(`/profile/edit/${id}`);  // Navigate to edit page
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Profile Details</h3>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Age: {profile.age}</p>
     

      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProfileDisplay;
