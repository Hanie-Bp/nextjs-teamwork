import { connectDB, disconnectDB } from "@/db/connectDB";
import Question from "@/db/models/Question";
import { revalidateTag } from "next/cache";

// GET all the questions
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

// POST a question
export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();
    const questions = await Question.create(body);
    return new Response(JSON.stringify(questions), {
      headers: {
        "content-Type": "application",
      },
    });
  } catch (error) {
    console.log("Error creating post:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create question" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } finally {
    disconnectDB();
  }
}
