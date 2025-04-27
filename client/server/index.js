import { createClient } from "@supabase/supabase-js";
import express from "express"; // Corrected import for express
import dotenv from "dotenv";
import getEvent from "./routes/event/getEvent.js";
import cors from "cors";

dotenv.config();

const app = express();
const supabaseUrl = "https://vpcnzxqkoahqotklvctk.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());
app.use("/", getEvent);

app.listen(3001, () => {
  console.log("We are listening at port 3001");
});
