const express = require("express");
const zod = require("zod");
import { JWT_SECRET } from "../config";
import { User } from "../db";

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = User.findOne({
    username: body.username,
  });
  if (user._id) {
    return res.json({
      message: "Email already taken / Incorrect inputs",
    });
  }
  const dbUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );
  res.jsom({
    message: "User created successfully",
    token: token,
  });
});

const router = express.Router();

module.exports = router;
