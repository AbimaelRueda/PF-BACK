import { DataType, DataTypes, Model, ModelStatic, Optional } from "sequelize";
import sequelizeConnection from "../db";
import Comments from "./Coments.model";

interface BlockbusterAttributes {
  id?: number;
  name: string;
  year: string;
  genre: string;
  poster: string;
}

class Blockbuster extends Model<BlockbusterAttributes> {
  public id!: number;
  public name!: string;
  public year!: string;
  public genre!: string;
  public poster!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Blockbuster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    poster: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: sequelizeConnection, paranoid: true }
);

export default Blockbuster;
