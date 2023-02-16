import { Sequelize } from "sequelize";

const db = new Sequelize('Kost_db', 'root', '', {
    host: "localhost",
    dialect: "mssql"
});

export default db;