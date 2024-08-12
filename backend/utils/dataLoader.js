import mongoose from "mongoose";
import fs from "fs/promises"; // For reading the JSON file
import path from "path";
import Question from "../models/Question.js"; // Adjust the path as needed
import Tag from "../models/Tag.js"; // Adjust the path as needed

export async function loadData() {
  try {
    // Read the JSON file
    const filePath = path.resolve("backend/ques.json"); // Adjust the path as needed
    const fileContent = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContent);

    // Extract unique tags and questions from the JSON file
    const uniqueTags = data.uniqueTags;
    const questions = data.questions;

    // Save tags to the database
    for (const tag of uniqueTags) {
      await Tag.findOneAndUpdate(
        { name: tag },
        { name: tag },
        { upsert: true, new: true }
      );
    }

    // Save questions to the database
    for (const question of questions) {
      await Question.findOneAndUpdate(
        { text: question.question },
        {
          text: question.question,
          options: question.options,
          correctOptions: question.correct,
          tags: question.tags,
          type: question.type,
        },
        { upsert: true, new: true }
      );
    }

    console.log("Data successfully saved to MongoDB");
  } catch (error) {
    console.error("Error loading data:", error);
  }
}
