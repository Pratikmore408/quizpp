export const matchQuestions = (selectedTags, questions) => {
  return questions
    .map((question) => {
      const matchedTags = question.tags.filter((tag) =>
        selectedTags.includes(tag)
      ).length;
      return { ...question, matchedTags };
    })
    .sort((a, b) => b.matchedTags - a.matchedTags)
    .slice(0, 10);
};
