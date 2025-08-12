import React, { Suspense } from "react";
import Answers from "@/components/Answers";
import { getData } from "@/utils/actions";
import { CircularProgress } from "@mui/material";

// Force dynamic rendering to prevent build-time issues
export const dynamic = "force-dynamic";

const page = async ({ params }) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const info = await getData(`${baseUrl}/api/v1/questions/${params.id}`, [
      "questions",
    ]);
    // console.log(info.answers);

    return (
      <Suspense fallback={<CircularProgress />}>
        <Answers
          id={params.id}
          title={info.title}
          description={info.description}
          answers={info.answers}
          questionId={info._id}
        />
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching question:", error);
    // Return a fallback UI for build time
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Question not found</h2>
        <p>
          The question you're looking for doesn't exist or couldn't be loaded.
        </p>
      </div>
    );
  }
};

export default page;
