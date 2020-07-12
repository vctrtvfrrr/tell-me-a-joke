export const title = currentPage => {
  let title = "";

  switch (currentPage) {
    case "sad":
      title = "- I'm sad ☹️  - please, tell me a joke";
      break;

    case "happy":
      title = "- I found the answer, it's 42 🙂";
      break;

    case "neutral":
    default:
      title = "- what means the life, universe and everything 🙄";
      break;
  }

  return title;
};

export const resolveMetaInfo = currentPage => {
  return {
    title: title(currentPage)
  };
};

export default resolveMetaInfo;
