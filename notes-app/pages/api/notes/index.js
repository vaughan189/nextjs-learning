// pages/api/note/index.js
import nc from "next-connect";
import notes from "../../../data";

const handler = nc()

  .get((req, res) => {
    res.json({ data: notes });
  })

  .post((req, res) => {
    const id = notes.length + 1;
    const note = { ...req.body, id };

    notes.push(note);
    res.json({ data: note });
  });

export default handler;
