import Tag from "../models/Tag.js";

export const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    return res.json(tags.map((tag) => tag.name));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tags" });
  }
};
