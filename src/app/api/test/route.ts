export const dynamic = "force-static";
import { connectToDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectToDB();
    return Response.json({ message: "Connected to MongoDB!" });
  } catch (error) {
    console.log("Database connection error: ", error);
  }
}
