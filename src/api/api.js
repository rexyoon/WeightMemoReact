import axios from 'axios';

const API_BASE_URL = '/api';

export const fetchAllMembers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/members`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the members!", error);
    throw error;
  }
};
