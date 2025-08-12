import React, { Suspense } from "react";
import Answers from "@/components/Answers";
import {
  addAnswer,
  getQuestionById,
  updateAnswer,
  deleteAnswer,
} from "@/utils/actions";
import { CircularProgress } from "@mui/material";

// Force dynamic rendering to prevent build-time issues
export const dynamic = "force-dynamic";

const page = async ({ params }) => {
  const info = await getQuestionById(params.id);
  if (!info) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Question not found</h2>
        <p>
          The question you're looking for doesn't exist or couldn't be loaded.
        </p>
      </div>
    );
  }

  return (
    <Suspense fallback={<CircularProgress />}>
      <Answers
        id={params.id}
        title={info.title}
        description={info.description}
        answers={info.answers}
        questionId={info._id}
        onAddAnswer={addAnswer}
        onUpdateAnswer={updateAnswer}
        onDeleteAnswer={deleteAnswer}
      />
    </Suspense>
  );
};

export default page;
