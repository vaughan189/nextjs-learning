import nc from "next-connect";
import cors from "cors";

const handler = nc()
  .use(cors())
  .get((req, res) => {
    res.send("Hello world");
  })
  .post((req, res) => {
    res.json(req.body);
  })
  .put(async (req, res) => {
    res.end("hello");
  });

export default handler;
