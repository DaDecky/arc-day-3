const prompt = require("prompt-sync")({ sigint: true });
const axios = require("axios");

let savedUser = [];

async function getUser(id, callback) {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;
  try {
    const response = await axios.get(url);
    console.log(response.data);
    if (callback) {
      callback(id);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function saveUserCallback(id) {
  let save = prompt("Would you like to save this user info? (y/n)");
  if (save == "y") {
    savedUser.push(id);
    console.log("User info saved!");
  }
}

async function main() {
  while (true) {
    console.log("===============");
    console.log("User getter app");
    console.log("===============");
    console.log("[1] Get user info");
    console.log("[2] Saved user info");
    console.log("[3] Exit");

    let key = prompt("Choose Menu: (1/2/3) ");
    switch (key) {
      case "1":
        let id = prompt("Which Id? (1-10) ");
        console.log(`Getting user info with id: ${id}`);
        await getUser(id, saveUserCallback);
        break;
      case "2":
        console.log("Saved user info:");
        for (let index = 0; index < savedUser.length; index++) {
          await getUser(savedUser[index]);
        }
        break;
      case "3":
        process.exit();
        break;

      default:
        break;
    }
  }
}

main();
