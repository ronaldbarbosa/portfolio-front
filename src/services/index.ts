import axios from 'axios';
import { json } from 'stream/consumers';

const API_URL = 'http://127.0.0.1:8000/projects/';

export const index = async () => {
    const response = await axios.get(`${API_URL}`);
    return JSON.stringify(response.data);    
}