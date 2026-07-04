import asyncHandler from "../utils/asyncHandler.js";
import AIService from "../services/ai.service.js";

class AiController {
  getInsights = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const insights = await AIService.getInsights(userId);

    return res.status(200).json({
      success: true,
      message: "AI insights generated successfully",
      data: { insights },
    });
  });
}

export default new AiController();
