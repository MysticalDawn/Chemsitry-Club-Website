import { supabase } from "../..";
import express from "express";

const router = express.Router();

router.post("/create_event", async (req, res) => {
  const { title, date, time, location } = req.body;

  if (!title || !date || !time || !location) {
    return res
      .status(400)
      .json({ error: "All fields are required: title, date, time, location" });
  }

  try {
    const { data, error } = await supabase
      .from("Events")
      .insert([{ title, date, time, location }]);

    if (error) {
      throw error;
    }

    res.status(201).json({ message: "Event created successfully", data });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create event", details: err.message });
  }
});

export default router;
