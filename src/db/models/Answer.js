import { Schema, model, models } from "mongoose";

const answerSchema = new Schema({
  // answerId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Question",
  // },
  description: {
    type: String,
  },
});

const Answer = models.Answer || model("Answer", answerSchema);
export default Answer;
