import axios from 'axios';
 
const API = axios.create({  baseURL:'http://localhost:5000/games' });

export const fetchGames = () => API.get('/list');