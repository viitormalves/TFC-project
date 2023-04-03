import Users from '../models/UsersModel';
import IUser from '../interfaces/IUser';

export default class UsersService {
  constructor(private usersModel = Users) {}

  public async findByEmail(email: string): Promise<IUser | null> {
    return this.usersModel.findOne({ where: { email } });
  }

  public async findById(id: number): Promise<IUser | null> {
    return this.usersModel.findByPk(
      id,
      { attributes: { exclude: ['password', 'id', 'username', 'email'] } },
    );
  }
}
