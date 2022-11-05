const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const db = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD);

async function main() {
  await mongoose.connect(db);
  console.log("Sever connected to database succssfully!");
}

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

main().catch((err) => console.log(err));
