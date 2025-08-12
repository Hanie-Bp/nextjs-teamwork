"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/db/connectDB";
import Question from "@/db/models/Question";
import Answer from "@/db/models/Answer";

// Read operations (can be used by Server Components and other server actions)
export async function getAllQuestions() {
  await connectDB();
  const questions = await Question.find().lean();
  return JSON.parse(JSON.stringify(questions));
}

export async function getQuestionById(questionId) {
  await connectDB();
  const question = await Question.findById(questionId)
    .populate("answers")
    .lean();
  if (!question) return null;
  return JSON.parse(JSON.stringify(question));
}

// Mutations (callable from Client Components). Each revalidates relevant paths for immediate UI updates
export async function createQuestion(input) {
  await connectDB();
  const created = await Question.create({
    title: input.title,
    description: input.description,
  });
  // Update the list page
  revalidatePath("/questions");
  return JSON.parse(JSON.stringify(created));
}

export async function deleteQuestion(questionId) {
  await connectDB();
  await Question.findOneAndDelete({ _id: questionId });
  // Update the list page
  revalidatePath("/questions");
}

export async function addAnswer({ questionId, description }) {
  await connectDB();
  const newAnswer = await Answer.create({ description });
  await Question.findByIdAndUpdate(
    questionId,
    { $push: { answers: newAnswer._id } },
    { new: true, runValidators: true }
  );
  // Update the question detail and list pages
  revalidatePath(`/questions/${questionId}`);
  revalidatePath("/questions");
  return JSON.parse(JSON.stringify(newAnswer));
}

export async function updateAnswer({ questionId, answerId, description }) {
  await connectDB();
  const updated = await Answer.findByIdAndUpdate(
    answerId,
    { description },
    { new: true, runValidators: true }
  );
  revalidatePath(`/questions/${questionId}`);
  return JSON.parse(JSON.stringify(updated));
}

export async function deleteAnswer({ questionId, answerId }) {
  await connectDB();
  await Answer.findByIdAndDelete(answerId);
  await Question.findByIdAndUpdate(
    questionId,
    { $pull: { answers: answerId } },
    { new: true }
  );
  revalidatePath(`/questions/${questionId}`);
}

// Keep a base URL util if ever needed elsewhere (no longer used for data access)
export const getBaseUrl = () => process.env.NEXT_PUBLIC_API_URL;
