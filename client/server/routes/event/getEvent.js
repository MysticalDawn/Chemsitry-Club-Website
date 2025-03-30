import { supabase } from "../../index.js";
import express from "express";

const router = express.Router();

router.get("/get_events", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("random_events")
      .select("*")
      .limit(3);
    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json({ message: "Event retrieved successfully", data });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to retrieve event", details: err.message });
  }
});

export default router;
