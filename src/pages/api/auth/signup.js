import connectMongo from "../../../../database/conn";
import User from "../../../../models/Schema";
import { hash } from "bcryptjs";

const handler = async (req, res) => {
  connectMongo().catch((err) => res.json(err));
  //only post method is accepted
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    const { name, email, password } = req.body;

    // check duplicate users
    const checkExistingUsers = await User.findOne({ email });
    if (checkExistingUsers) {
      return res.status(422).json({ error: "User Already Exists!" });
    }
    const hashedPassword = await hash(password, 12);

    User.create({ name, email, password: await hash(password, 12) }).then(
      (data) => {
        res.status(201).json({ success: true, user: data });
      }
    );

    // hash password npm i bycryptjs
  } else {
    res.status(405).json({ error: "HTTP method not valid only POST Accepted" });
  }
};
export default handler;
