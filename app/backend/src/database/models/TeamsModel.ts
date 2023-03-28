import { DataTypes, Model } from 'sequelize';
import db from '.';

export default class Teams extends Model {
  declare id?: number;
  declare teamName: string;
}

Teams.init({
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'teams',
  underscored: true,
  sequelize: db,
  timestamps: false,
});
