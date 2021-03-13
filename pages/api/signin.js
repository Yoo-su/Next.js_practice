import connectDB from '../../middleware/mongodb';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from '../../models/user';

const secret = 'test';

const handler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser) {
      return res.json({ success:false });}

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({success:true,token:token})
  } catch (err) {
    res.status(500).json({ success:false });
  }
};

export default connectDB(handler);