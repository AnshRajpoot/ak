const fs = require("fs");
let text = fs.readFileSync("text.txt","utf-8");
text = text.replace("ansh","Deepak");
console.log(text);

console.log("Creating a new file......")
fs.writeFileSync("deepak.txt",text);