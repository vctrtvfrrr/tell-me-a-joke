import axios from "axios";

const API_URL = "https://geek-jokes.sameerkumar.website/api?format=json";

const getJoke = async () => {
  try {
    const { data: response } = await axios.get(API_URL);
    return response.joke;
  } catch (error) {
    alert("An error has occurred");
  }
};

export default {
  getJoke
};
