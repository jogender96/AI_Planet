import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Replace with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const uploadPdf = async (formData) => {
  try {
    const response = await api.post('/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error uploading PDF');
  }
};

export const askQuestion = async (documentId, question) => {
  try {
    const response = await api.post(`/ask/?document_id=${documentId}&question=${question}`);
    return response.data;
  } catch (error) {
    throw new Error('Error asking question');
  }
};
