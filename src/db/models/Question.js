import { Schema, model, models } from "mongoose";

const questionSchema = new Schema({
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
},{ timestamps: true });

export default models.Question || model("Question", questionSchema);