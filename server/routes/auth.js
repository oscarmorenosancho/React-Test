import { Router } from 'express';
import { register, login, order } from '../controllers/auth.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

// Register
router.post('/register', register);

// Login
router.post('/login', login);

// Get order
router.get('/order', checkAuth, order)

export default router