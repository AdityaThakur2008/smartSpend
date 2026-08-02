import { Router } from "express";

const apiCheckRouter = Router();

apiCheckRouter.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "API is working" });
});

export default apiCheckRouter;
