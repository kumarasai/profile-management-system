
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Profile {
  name: string;
  email: string;
  age: number;
}

const ProfileDisplay: React.FC = () => {
  const [profileData, setProfileData] = useState<Profile | null>(null); 
  const { id } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) return; 

      try {
        console.log('Fetching profile with ID:', id); 
        const response = await fetch(`/.netlify/functions/profile/${id}`); 
        const data = await response.json();
        console.log('Fetched profile data:', data);

        if (data && data.profile) {
          setProfileData(data.profile); 
        } else {
          console.error('Profile data not found or is empty');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, [id]);

  
  if (profileData === null) {
    return <div>Loading...</div>;
  }

 
  const handleEdit = () => {
    navigate(`/edit-profile/${id}`);
  };

  const handleDelete = async () => {
    try {
      await fetch(`/.netlify/functions/profile/${id}`, {
        method: 'DELETE', 
      });
      navigate('/profiles'); 
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  return (
    <div className="profile-display-container">
      <h2>Profile Details</h2>
      <p><strong>Name:</strong> {profileData.name}</p>
      <p><strong>Email:</strong> {profileData.email}</p>
      <p><strong>Age:</strong> {profileData.age}</p>

      <div className="profile-actions">
        <button onClick={handleEdit} className="edit-btn">Edit</button>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default ProfileDisplay;
