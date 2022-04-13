import { Sequelize } from "sequelize";

const db = new Sequelize(
  String(process.env.DB_NAME),
  String(process.env.DB_USERNAME),
  String(process.env.DB_PASSWORD),
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
  }
);

module.exports = db;
