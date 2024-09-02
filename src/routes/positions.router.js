import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send("Ok")
  } catch (error) {
    res.status(500).send("Error.get: `{error}")
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.query);
    res.status(200).send("Ok")
  } catch (error) {
    res.status(500).send("Error.post: `{error}")
  }
});

export default router;
