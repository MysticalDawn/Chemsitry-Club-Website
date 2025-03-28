import { createClient } from "@supabase/supabase-js"; // Correct import for Supabase
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.SUPABASE_KEY)

const supabaseUrl = "https://vpcnzxqkoahqotklvctk.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
