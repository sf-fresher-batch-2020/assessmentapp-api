# assessmentapp-api




# Clone the Project

```
git clone ...url
cd projectname
```

##### Step 1: Create npm project

```
npm init
```

##### Step 2: Install Dependencies

```
npm i express@next
npm i cors
npm i mysql2
npm i dotenv 
npm i nodemon -D
```

##### Step 3: Create app.js

```
//Use dotenv to read .env vars into Node
require('dotenv').config();
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
```

##### Step 4: Start the Node JS server using nodemon ( Development )

```
nodemon app.js
````

##### Step 5: Test the REST End point

- http://localhost:5000

- Output: REST API Working


##### Step 6: Heroku Deployment - Create a file ( Procfile) with the below contents

```
web: node app.js
```

##### Step 7: Commit your files

```
git add package.json package-lock.json app.js Procfile
git commit -m "Added REST API "
git push -u origin main
```
