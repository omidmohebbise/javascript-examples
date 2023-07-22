const pg = require('pg');
const express = require("express");
// create our express app 
const app = express()
const bodyParser = require('body-parser');

const pool = new pg.Pool({
        user: 'user',
        host: 'localhost',
        database: 'batchdb',
        password: '111',
        port: 5432,
    });

   
// create GET route on on express server API 
app.get('/express-hello-world', (req, res) => {
    res.send('Hello, this is our first project')
})
app.get('/p',async(req,res)=>{
    try {
        // Connect to the pool
        const client = await pool.connect();
        console.log('Connected to PostgreSQL database');

        // Run a query
        const result = await client.query('SELECT NOW()');
        console.log(result.rows[0].now);

        // Release the client back to the pool
        client.release();        
    }catch(e){
        console.log(e)
    }
    res.send("response")
})

app.use(bodyParser);
// listen on port 3000 
app.listen(8080, () => console.log("Server running on port 8080"))