import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import UsersService from '../services/usersService';
import { createJWT } from '../utils/JWT.functions';

export default class UsersController {
  constructor(private usersService: UsersService) {}

  login = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const userData = await this.usersService.findByEmail(data.email);

      if (!userData) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      if (!bcrypt.compareSync(data.password, userData.password || '')) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = createJWT(userData);
      return res.status(200).json({ token });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  findRole = async (req: Request, res: Response) => {
    try {
      const { id } = req.body.user;
      const userRole = await this.usersService.findById(id);
      res.status(200).json(userRole);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
