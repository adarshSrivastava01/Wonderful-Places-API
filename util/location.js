const axios = require("axios");

const API_KEY = process.env.GEOCODING_API_KEY;

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
