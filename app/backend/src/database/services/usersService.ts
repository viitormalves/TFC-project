import Users from '../models/UsersModel';
import IUser from '../interfaces/IUser';

export default class UsersService {
  constructor(private usersModel = Users) {}

  public async findByEmail(email: string): Promise<IUser | null> {
    return this.usersModel.findOne({ where: { email } });
  }
}
