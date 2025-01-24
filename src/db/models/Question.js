import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";
import Answer from "./Answer";

const questionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    answers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Answer",
      },
    ],
  },
  { timestamps: true }
);

// Middleware to delete associated answers when a question is deleted
questionSchema.pre("findOneAndDelete", async function (next) {
  const question = await this.model.findOne(this.getFilter()); // Get the current question
  if (question) {
    console.log("Deleting answers for question:", question._id);
    await Answer.deleteMany({ _id: { $in: question.answers } }); // Delete all related answers
    console.log("Answers deleted:", question.answers);
  } else {
    console.log("No question found for deletion");
  }
  next();
});

export default models.Question || model("Question", questionSchema);
