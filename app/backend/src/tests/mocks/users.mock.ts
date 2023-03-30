import IUser, { ILogin } from "../../database/interfaces/IUser";
import Users from "../../database/models/UsersModel";

const userData = {
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
    // senha: secret_admin
} as Users;

const userLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin',
} as ILogin

export { userData, userLogin };