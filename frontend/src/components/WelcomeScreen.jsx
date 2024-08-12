import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTag } from "../redux/tagsSlice";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedTags = useSelector((state) => state.tags.selectedTags);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/tags");
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error("Failed to fetch tags", error);
      }
    };

    fetchTags();
  }, []);

  const handleTagClick = (tag) => {
    if (selectedTags.length < 10) {
      dispatch(selectTag(tag));
    }
  };

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div>
      <h1>Select 10 Tags</h1>
      <div className="tags-container">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            disabled={selectedTags.includes(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {selectedTags.length === 10 && (
        <button onClick={startQuiz}>Start Quiz</button>
      )}
    </div>
  );
};

export default WelcomeScreen;
