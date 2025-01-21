import { Schema, model, models } from "mongoose";

const answerSchema = new Schema({
  description: {
    type: String,
  },
});

const Answer = models.Answer || model("Answer", answerSchema);
export default Answer;
