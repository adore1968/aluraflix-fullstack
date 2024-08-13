import app from "./app.js";
import { connection } from "./database/db.js";

connection();

app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});
