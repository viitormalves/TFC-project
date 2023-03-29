import { DataTypes, Model } from 'sequelize';
import db from '.';

export default class Users extends Model {
  declare id?: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password?: string;
}

Users.init({
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',
  underscored: true,
  sequelize: db,
  timestamps: false,
});
