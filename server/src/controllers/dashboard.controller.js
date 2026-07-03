import DashboardService from "../services/dashboard.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/appError.js";

class DashboardController {
  async getSummary(req, res) {

    const userId = req.user.id;

    const summary = await DashboardService.summary(userId);

    return res.status(200).json({
      success: true,
      message: "Dashboard summary retrieved successfully",
      data: summary,
    });
  }

    async getSummaryByCategory(req, res) {
        const userId = req.user.id;

        const summaryByCategory = await DashboardService.summaryByCategory(userId);

        return res.status(200).json({
            success: true,
            message: "Dashboard summary by category retrieved successfully",
            data: summaryByCategory,
        });
    }

    async getCurrentMonthSummary(req, res) {
        const userId = req.user.id;
        const currentMonthSummary = await DashboardService.currentMonthSummery(userId);
        return res.status(200).json({
            success: true,
            message: "Current month summary retrieved successfully",
            data: currentMonthSummary,
        });
    }

    async getMonthlySummary(req, res) {
        const userId = req.user.id;
        const monthlySummary = await DashboardService.monthlySummary(userId);
        return res.status(200).json({
            success: true,
            message: "Monthly summary retrieved successfully",
            data: monthlySummary,
        });
    }
}


export default new DashboardController();