import { Request, Response, NextFunction } from 'express';

const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{3}$/g;

export default function validateLogin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const data = req.body;
  if (!data.email || !data.password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!regex.test(data.email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  if (data.password < 6) return res.status(401).json({ message: 'Invalid email or password' });
  next();
}
