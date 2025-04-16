import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET!;

export function generateToken(payload: object) {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
}
