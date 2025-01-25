import React, { Suspense } from "react";
import Answers from "@/components/Answers";
import { getData } from "@/utils/actions";
import { CircularProgress } from "@mui/material";

const page = async ({ params }) => {
  try {
    const info = await getData(
      `http://localhost:3000/api/v1/questions/${params.id}`,
      ["questions"]
    );
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
    return new Error(error.message);
  }
};

export default page;
