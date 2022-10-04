"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbName = process.env.DB_NAME || "blockbuster_2o8s";
const dbUser = process.env.DB_USER || "back";
const dbHost = process.env.DB_HOST || "dpg-cctmq902i3mov28v6950-a";
const dbPassword = process.env.DB_PASSWORD || "FnhPv5FEqoetkg02MmgWMHNPWt5vfLfQ";
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: "postgres",
    logging: false,
});
exports.default = sequelize;
