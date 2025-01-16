import { connectDB, disconnectDB } from "@/db/connectDB";
import Question from "@/db/models/Question";
import { revalidateTag } from "next/cache";

export async function GET() {
    try {
      await connectDB();
      const questions = await Question.find();
  
    //   revalidateTag("questions");
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


  
  // export async function POST(req) {
  //   try {
  //     await connectDB();
  //     const body = await req.json();
  
  //     const newQuestion = await Question.create(body);
  
  //     revalidateTag("questions");
  //     console.log("Cache revalidated for 'questions'");
  
  //     return new Response(JSON.stringify(newQuestion), {
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   } catch (error) {
  //     console.error("Error posting question:", error);
  //     return new Response(JSON.stringify({ error: "Failed to post question" }), {
  //       status: 500,
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   } finally {
  //     disconnectDB();
  //   }
  // }