import { SignOptions } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';

const JWT_SECRET = 'jwt_secret';
const JWT_CONFIG: SignOptions = { algorithm: 'HS256' };

const createJWT = (payload: IUser): string => {
  const { id, email } = payload;
  return jwt.sign({ id, email }, JWT_SECRET, JWT_CONFIG);
};

const fake = () => {};

export { createJWT, fake };
