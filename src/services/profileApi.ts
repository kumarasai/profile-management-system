
import axios from 'axios';

const API_URL = 'http://localhost:5000/profiles';


export const getProfiles = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const getProfileById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};





export const deleteProfile = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};
export const createProfile = async (newProfile: any) => {
  const response = await axios.post(API_URL, newProfile);
  return response.data;
};


export const updateProfile = async (id: string, updatedProfile: any) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedProfile);
  return response.data;
};

