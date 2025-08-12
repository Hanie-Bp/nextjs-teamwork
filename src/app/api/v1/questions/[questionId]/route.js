import { connectDB, disconnectDB } from "@/db/connectDB";
import Answer from "@/db/models/Answer";
import Question from "@/db/models/Question";
import { revalidateTag } from "next/cache";

// GET answers of a question
export async function GET(req, { params }) {
  try {
    await connectDB();
    const question = await Question.findById(params.questionId).populate(
      "answers"
    );
    if (!question) {
      return new Response(JSON.stringify({ error: "Question not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return new Response(JSON.stringify(question), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching answers:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } finally {
    await disconnectDB();
  }
}

// POST an answer
export async function POST(request, { params }) {
  try {
    await connectDB();
    const body = await request.json();
    const newAnswer = new Answer(body);
    await newAnswer.save();
    await Question.findByIdAndUpdate(
      params.questionId,
      { $push: { answers: newAnswer._id } },
      { new: true, runValidators: true }
    );
    return new Response(JSON.stringify(newAnswer), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    console.error("Error adding the answer:", error);
    return new Response(JSON.stringify({ error: "Failed to add answer" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } finally {
    await disconnectDB();
  }
}

//Delete a question
export async function DELETE(req, { params }) {
  try {
    const { questionId } = params;
    await connectDB();
    const question = await Question.findOneAndDelete({ _id: questionId });
    if (!question) {
      return new Response(JSON.stringify({ error: "Question not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    console.log("Question deleted:", question);
    //   revalidateTag("questions");
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting question:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete question" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } finally {
    await disconnectDB();
  }
}
