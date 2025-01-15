import { connectDB, disconnectDB } from "@/db/connectDB";
import Question from "@/db/models/Question";

// GET all questions
export async function GET(request, { params }) {
  try {
    await connectDB();
    const questions = await Question.find();
    return new Response(JSON.stringify(questions), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    await disconnectDB();
  } finally {
    await disconnectDB();
  }
}
