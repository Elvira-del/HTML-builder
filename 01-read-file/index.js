const fs = require("fs");
const path = require("path");
const validPath = path.join(__dirname, "text.txt");
const readableStream = fs.createReadStream(validPath, "utf-8");

let data = "";

readableStream.on("data", (chunk) => (data += chunk));
readableStream.on("end", () => console.log(data));
readableStream.on("error", (error) => console.log("Error", error.message));
