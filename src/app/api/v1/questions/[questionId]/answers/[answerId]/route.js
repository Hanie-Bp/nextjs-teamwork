import { connectDB, disconnectDB } from "@/db/connectDB";
import Answer from "@/db/models/Answer";
import Question from "@/db/models/Question";

// PATCH an answer
export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const { answerId } = params;
    const body = await request.json();
    const answer = await Answer.findByIdAndUpdate(answerId, body, {
      new: true,
      runValidators: true,
    });
    if (!answer) {
      return res.status(404).json({ error: "Answer not found" });
    }
    return new Response(JSON.stringify(answer), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching answers:", error);
  } finally {
    await disconnectDB();
  }
}

//DELETE an answer
export async function DELETE(req, { params }) {
  try {
    const { questionId, answerId } = params;
    await connectDB();
    const answer = await Answer.findByIdAndDelete(answerId);
    if (!answer) {
      return new Response("answer not found", { status: 404 });
    }

    await Question.findByIdAndUpdate(
      questionId,
      { $pull: { answers: answerId } },
      { new: true }
    );
    //   revalidateTag("questions");
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting question:", error);
  } finally {
    await disconnectDB();
  }
}
