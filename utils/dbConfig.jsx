import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://neondb_owner:Eu1Z7pVKeFla@ep-late-math-a50qvgjn.us-east-2.aws.neon.tech/Expense-Tracker?sslmode=require"
);
const db = drizzle(sql, { schema });
