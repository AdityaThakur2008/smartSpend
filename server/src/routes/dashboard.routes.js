import {Router} from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import DashboardController from '../controllers/dashboard.controller.js';

const router = Router();

router.get('/summary', authMiddleware, DashboardController.getSummary);
router.get('/summary-by-category', authMiddleware, DashboardController.getSummaryByCategory);
router.get('/current-month-summary', authMiddleware, DashboardController.getCurrentMonthSummary);
router.get('/monthly-summary', authMiddleware, DashboardController.getMonthlySummary);

export default router;