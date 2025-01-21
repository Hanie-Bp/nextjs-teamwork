import { connectDB, disconnectDB } from "@/db/connectDB";
import Question from "@/db/models/Question";
import { revalidateTag } from "next/cache";

export async function GET() {
  try {
    await connectDB();
    const questions = await Question.find();

    // revalidateTag("questions");
    return new Response(JSON.stringify(questions), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching question:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}
