import React from "react";
import { data } from "@/utils/data";
import Answers from "@/components/Answers";

const page = ({ params }) => {
  try {
    const info = data.questions.filter((item) => item.id === params.id)[0];
    return (
      <Answers
        title={info.title}
        description={info.description}
        answers={info.answers}
      />
    );
  } catch (error) {
    return new Error(error.message);
  }
};

export default page;
