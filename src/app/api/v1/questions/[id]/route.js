import { connectDB, disconnectDB } from "@/db/connectDB";
import Answer from "@/db/models/Answer";
import Question from "@/db/models/Question";




export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectDB();
    const question = await Question.findById(id);

    if (!question) {
      return new Response(JSON.stringify({ error: 'Question not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(question), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching question:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch question' }), { status: 500 });
  } finally {
    disconnectDB();
  }
}











// export async function GET(req, { params }) {
//   const { id } = params;

//   try {
//     await connectDB();

    
//     const question = await Question.findById(id).populate("answers");

//     if (!question) {
//       return new Response(JSON.stringify({ error: 'Question not found' }), { status: 404 });
//     }

//     console.log("Fetched Question with Answers:", question); 

//     return new Response(JSON.stringify(question), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error fetching question:", error);
//     return new Response(JSON.stringify({ error: "Failed to fetch question" }), { status: 500 });
//   } finally {
//     disconnectDB();
//   }
// }





export async function POST(req, { params }) {
  const { id } = params;

 
  if (!id || id === "undefined") {
    return new Response(JSON.stringify({ error: "Invalid question ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await connectDB();
    const body = await req.json();

    const question = await Question.findById(id); 
    if (!question) {
      return new Response(JSON.stringify({ error: "Question not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newAnswer = await Answer.create({
      answerDesc: body.answerDesc,
      questionId: id,
    });

    question.answers.push(newAnswer._id);
    await question.save();

    return new Response(JSON.stringify(newAnswer), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error saving answer:", error);
    return new Response(
      JSON.stringify({ error: "Failed to save answer" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await disconnectDB();
  }
}




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
  