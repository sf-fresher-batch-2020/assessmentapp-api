const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;


const mysql = require("mysql2/promise");
/*
const pool = mysql.createPool({
    host: process.env.DB_URL || "localhost",
    port: 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "todoapp_db",
    connectionLimit: 1
});
*/
app.get("/",(req,res)=>res.send("REST API Working"));
app.listen(port, () => console.log(`Example app listening on port!`, port));