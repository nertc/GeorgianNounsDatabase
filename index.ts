import express from "express";
import dotenv from "dotenv";
import { generate } from "./src/generate/generate";
import { getRandom } from "./src/random/getRandom";
import { IGenerateWords, IRandomWords, ITypedRequestBody } from "./src/shared/interfaces";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post("/", (req: ITypedRequestBody<IGenerateWords>, res) => {
  res.json(generate(req.body?.from, req.body?.count));
});

app.post("/random", (req: ITypedRequestBody<IRandomWords>, res) => {
  res.json(getRandom(req.body?.count));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
