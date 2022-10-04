import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME as string || "blockbuster_2o8s";
const dbUser = process.env.DB_USER as string || "back";
const dbHost = process.env.DB_HOST ||"dpg-cctmq902i3mov28v6950-a";
const dbPassword = process.env.DB_PASSWORD || "FnhPv5FEqoetkg02MmgWMHNPWt5vfLfQ";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
  logging: false,
});
export default sequelize;