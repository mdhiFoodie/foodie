import express from 'express';

import authRouter from '../components/auth/authRouter';
import menuRouter from '../components/menu/menuRouter';

const router = express.Router();

router.use('/auth', authRouter);

router.use('/menu', menuRouter);

export default router; 