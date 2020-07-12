import axios from "axios";

const API = axios.create({
  baseURL: "https://geek-jokes.sameerkumar.website",
  headers: { Accept: "application/json" },
  timeout: 5000 // miliseconds
});

const getJoke = async () => {
  const response = {};

  try {
    const { data: res } = await API.get("/api?format=json");
    response.success = true;
    response.text = res.joke;
  } catch (error) {
    response.success = false;
    response.text = "I'm sorry, I think I lost my book of jokes...  🙄";
  }

  return response;
};

export default {
  getJoke
};
