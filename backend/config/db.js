import { Sequelize } from "sequelize";
 
const db = new Sequelize('tugas_jmpl', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;