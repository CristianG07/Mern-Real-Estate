import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) throw new Error("This user is already registered");

    user = new User({ username, email, password });
    await user.save();

    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password)))
      throw new Error("Email or password are incorrect");

    // Generar token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password: pass, ...infoUser } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(infoUser);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const { name, email, photo } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      const password =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      user = new User({ username: name, email, password, avatar: photo });
      await user.save();

      // Generar token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...infoUser } = user._doc;

      return res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(infoUser);
    }

    // Generar token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password: pass, ...infoUser } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(infoUser);
  } catch (error) {
    next(error);
  }
};
