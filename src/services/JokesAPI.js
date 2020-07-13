import axios from "axios";

// Creates the API instance with the custom settings
const API = axios.create({
  baseURL: "https://geek-jokes.sameerkumar.website",
  headers: { Accept: "application/json" },
  timeout: 5000 // miliseconds
});

/**
 * Get a joke in the "Geek Joke API".
 * @return {Object}
 */
const getJoke = async () => {
  const response = {};

  try {
    const { data: res } = await API.get("/api?format=json");
    response.success = true;
    response.text = res.joke;
  } catch (error) {
    // As the API has the habit of being often down,
    // we return a user-friendly response.
    response.success = false;
    response.text = "I'm sorry, I think I lost my book of jokes...  🙄";
  }

  return response;
};

export default {
  getJoke
};
