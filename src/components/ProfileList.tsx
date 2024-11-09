// src/components/ProfileList.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProfiles, deleteProfile } from '../services/profileApi';
import './ProfileList.css'

const ProfileList: React.FC = () => {
  const [profiles, setProfiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const profiles = await getProfiles();
      setProfiles(profiles);
    };
    fetchProfiles();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteProfile(id);
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className='profile-list-main'>
      <h3>Profile List</h3>
      <Link to="/create" className='header'>Create New Profile</Link>
      <ul>
        {profiles.map((profile) => {
          return (
            <div className='profile-list'>
          <li key={profile.id} className='list-style'>
            <Link to={`/profile/${profile.id}`}>{profile.name}</Link>
            <button className='button-edit'><Link to={`/profile/edit/${profile.id}`}>Edit</Link></button>
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
          </div>
        )})}
      </ul>
    </div>
  );
};

export default ProfileList;
