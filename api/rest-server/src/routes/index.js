import express from 'express';

import authRouter from '../components/auth/authRouter';
import menuRouter from '../components/menu/menuRouter';
import cartRouter from '../components/cart/cartRouter';
import businessRouter from '../components/business/businessRouter';
import searchRestaurantsRouter from '../components/Feed/searchRestaurantsRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', searchRestaurantsRouter);

router.use('/menu', menuRouter);

router.use('/cart', cartRouter);

router.use('/business', businessRouter);

export default router; 