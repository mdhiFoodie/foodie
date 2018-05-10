import express from 'express';

import authRouter from '../components/auth/authRouter';
import menuRouter from '../components/menu/menuRouter';
import cartRouter from '../components/cart/cartRouter';

const router = express.Router();

router.use('/auth', authRouter);

router.use('/menu', menuRouter);

router.use('/cart', cartRouter);

export default router; 