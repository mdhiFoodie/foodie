import express from 'express';

import authRouter from '../components/auth/authRouter';
import menuRouter from '../components/menu/menuRouter';
import cartRouter from '../components/cart/cartRouter';
import businessRouter from '../components/business/businessRouter';
import searchRestaurantsRouter from '../components/Feed/searchRestaurantsRouter';
import poolRouter from '../components/pool/poolRouter';
import reviewsRouter from '../components/reviews/reviewsRouter';
import chatRouter from '../components/chat/chatRouter';
import paymentsRouter from '../components/stripe/paymentsRouter';
import ordersRouter from '../components/orders/ordersRouter';

const router = express.Router();

router.use('/auth', authRouter);

router.use('/users', searchRestaurantsRouter);

router.use('/menu', menuRouter);

router.use('/cart', cartRouter);

router.use('/business', businessRouter);

router.use('/pool', poolRouter);

router.use('/stripe', paymentsRouter);

router.use('/reviews', reviewsRouter);

router.use('/chat', chatRouter);
router.use('/orders', ordersRouter);

export default router;
