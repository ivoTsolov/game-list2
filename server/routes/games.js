import express from 'express';
import { getGames } from '../controllers/games.js';


const router = express.Router();

router.get('/list', getGames);

export default router;