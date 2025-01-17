import { connectDB, disconnectDB } from "@/db/connectDB";
import Question from "@/db/models/Question";

export async function DELETE(req, { params }) {
    try {
      const { id } = params;
      await connectDB();
      const question = await Question.findByIdAndDelete(id);
      if (!question) {
        return new Response("question not found", { status: 404 });
      }
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
  