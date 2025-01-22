import React from "react";
// import { data } from "@/utils/data";
import Answers from "@/components/Answers";
import { getData } from "@/utils/actions";

const page = async ({ params }) => {
  try {
    // const info = data.questions.filter((item) => item.id === params.id)[0];
    const info =  await getData(`http://localhost:3000/api/v1/questions/${params.id}`);
    console.log("Question Info:", info);
    return (
      <Answers
        title={info.title}
        description={info.description}
        answers={info.answers}
        questionId={info._id} 
      />
    );
  } catch (error) {
    return new Error(error.message);
  }
};

export default page;











