import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bugs';

export const getBugs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createBug = async (bug) => {
    const response = await axios.post(API_URL, bug);
    return response.data;
};

export const updateBug = async (id, updatedBug) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedBug);
    return response.data;
};

export const deleteBug = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};