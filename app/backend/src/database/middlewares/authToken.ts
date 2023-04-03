import { Response, Request, NextFunction } from 'express';
import { verifyJWT } from '../utils/JWT.functions';

export default function authToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const decoded = verifyJWT(authorization);
    req.body.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}
