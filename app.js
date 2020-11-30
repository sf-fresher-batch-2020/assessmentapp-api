const express = require('express')
    const app = express()
    const port = process.env.PORT || 5000
    const cors = require('cors');
    app.use(cors());
    app.use(express.json());

    // Create Connection Pool
    const mysql = require("mysql2/promise");
const { request } = require('express');

     const pool = mysql.createPool({
         host: process.env.DB_URL || "localhost",
         port: 3306,
         user: process.env.DB_USER || "root",
         password: process.env.DB_PASSWORD || "root",
         database: process.env.DB_NAME || "assessment",
         connectionLimit: 10
     });

app.get('/', (req,res)=>res.send("API Server working"));

    // Create Routes
    //users
    app.get('/api/users', getAllUsers);
    app.post('/api/users', createUser);

    //register and login
    async function createUser(req,res){
        let user = req.body;
        let params = [ user.name, user.email, user.password, user.role];
        const result = await pool.query("insert into users (name,email,password,role) values ( ?,?,?,?)", params);    
        res.status(201).json({id:result[0].insertId});        
    }

    async function getAllUsers(req,res){    
        const result = await pool.query("select id,name,email,password,role from users");    
        res.status(200).json(result[0]);
    }

    async function login (req,res){
        const user = req.body;
    let params = [user.email, user.password];
    const result = await pool.query("SELECT id, name, email,password FROM users WHERE email = ? AND password = ?", params);
    if (result[0].length == 0) {
        throw new Error("Invalid Login Credentials");
    }
    res.status(201).json(result[0]);
    }


    
    app.listen(port, () => console.log(`app listening on port ${port}!`))

