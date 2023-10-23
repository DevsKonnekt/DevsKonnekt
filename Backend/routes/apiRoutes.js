// routes/apiRoutes.js
import { Router } from 'express';
const router = Router();
import { someFunction } from '../controllers/someController';

router.get('/endpoint', someFunction);

export default router;
