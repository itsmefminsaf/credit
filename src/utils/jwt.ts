import jwt from "jsonwebtoken";

export const generateToken = (user: { uname: string; pwd: string }) => {
  const SECRET_KEY = process.env.JWT_SECRET;

  if (!SECRET_KEY) {
    console.log("Jwt secret not found");
    return null;
  }

  return jwt.sign({ uname: user.uname, pwd: user.pwd }, SECRET_KEY, {
    expiresIn: "30d",
  });
};

export const verifyToken = (token: string) => {
  const SECRET_KEY = process.env.JWT_SECRET;

  if (!SECRET_KEY) {
    console.log("Jwt secret not found");
    return null;
  }

  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};
