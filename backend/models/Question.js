import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
  {
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctOptions: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
    type: { type: String, required: true }, // 'single' or 'multiple'
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

export default Question;
