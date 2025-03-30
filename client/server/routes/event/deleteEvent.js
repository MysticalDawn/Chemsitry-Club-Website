import { supabase } from "../..";
import express from "express";

const router = express.Router();

router.delete("/delete_event", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "Event ID is required" });
  }

  try {
    const { data, error } = await supabase.from("Events").delete().eq("id", id);

    if (error) {
      throw error;
    }

    if (data.length === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully", data });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete event", details: err.message });
  }
});

export default router;
