const axios = require("axios");

const API_KEY = "4ab1fd8230a34ef0be3a54534d8a5244";

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );

  const data = response.data.results[0].geometry;

  return data;
}

module.exports = getCoordsForAddress;
