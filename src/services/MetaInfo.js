import logo from "@/assets/logo.png";

/**
 * Return a page title based on current page mood
 * @param {String} mood Current page mood
 * @return {String}
 */
const title = mood => {
  let title = "";

  switch (mood) {
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

/**
 * Return a page description based on current page mood
 * @param {String} mood Current page mood
 * @return {String}
 */
const description = mood => {
  let description = "";

  switch (mood) {
    case "sad":
      description =
        "I'm a sad page, I don't know what is the sense of life. How I would like to hear a good joke now.";
      break;

    case "happy":
      description =
        "I'm happy. I'm a lucky page. I finally found the meaning of all existence.";
      break;

    case "neutral":
    default:
      description =
        "Hello, I'm a webpage that likes to hear geek jokes. My mood isn't the best, so tell me a good joke to make my day better.";
      break;
  }

  return description;
};

/**
 * Returns a series of parameters that dynamically mount up the page's head tag.
 * @param {String} currentPage Current page mood
 * @return {Object}
 */
export const resolveMetaInfo = currentPage => {
  const metaTitle = title(currentPage);
  const metaDescription = description(currentPage);

  return {
    title: metaTitle,
    meta: [
      { name: "robots", content: "index,follow" },
      { name: "description", content: metaDescription },
      { property: "og:locale", content: "en" },
      { property: "og:title", content: metaTitle },
      { property: "og:description", content: metaDescription },
      { property: "og:site_name", content: "Tell me a joke" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logo },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: 256 },
      { property: "og:image:height", content: 256 }
    ]
  };
};

export default resolveMetaInfo;
