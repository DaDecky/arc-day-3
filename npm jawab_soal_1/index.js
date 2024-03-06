// menggunakan module axios
const axios = require("axios");

// akan melakukan HTTP GET Method dari url yang ditentukan untuk mengambil data yang ada di dalamnya
axios.get("https://jsonplaceholder.typicode.com/posts/1").then(
  (response) => {
    console.log(response.data);
  },
  (error) => {
    console.log(error);
  }
);
