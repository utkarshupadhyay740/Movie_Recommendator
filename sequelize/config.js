const {Sequelize}=require("sequelize");

const sequelize = new Sequelize({
    host:'localhost',
    dialect:'postgres',
    username:'postgres',
    password:'12345',
    port:5432,
    database:'miniproject6'
})

module.exports=sequelize;