import axios from "axios";
export const searchSongs = async (query) => {
  try {
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        query
      )}&entity=song&limit=20`
    );
    return response.data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};