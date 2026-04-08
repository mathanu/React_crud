const express=require('express');
const mysql = require('mysql');
const cors = require('cors');

// step1
const app = express();

app.use(express.json());
app.use(cors());



// STEP4 connect mysql
const db  = mysql.createConnection({
 host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: true }
})

// step2

app.get('/',(req,res)=>{
    return res.json("From backend sider");
})


// step5
// get data from database
app.get('/staf',(req,res)=>{
    const sql = "select * from staf";
    db.query(sql,(err,data)=>{
        if(err) return res.json("ERRor");

        return res.json(data);
    })
})


// insert qry 

app.post('/create', (req, res) => {
    const { name, age, address, salary } = req.body;
  
    const sql = 'INSERT INTO staf (name, age, address, salary) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, age, address, salary], (err, result) => {
        if(err) return res.json("ERRor");

        return res.json(result);
    });
  });


// step10  second
// update qry update employee
app.put('/update/:id',(req,res)=>{
const sql = "UPDATE staf SET  `name` = ?, `age` = ?, `address` = ?, `salary` = ? WHERE id = ?";
const values =[
    req.body.name,
    req.body.age,
    req.body.address,
    req.body.salary
]
const id = req.params.id;

db.query(sql,[...values,id],(err,data)=>{
    if(err) return res.json("Error");

    return res.json(data);

})

 })


// step 10 first
// Get Employee data just view
app.get('/view/:id', (req, res) => {


    const sql = "SELECT * FROM staf WHERE id = ?";
    const  id  = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        

        return res.json(data);
    });
});




//step11
//delete qry
app.delete('/staf/:id',(req,res)=>{
    const sql ="DELETE from staf WHERE  id = ?";


    const id = req.params.id;

    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("Error");

        return res.json(data);

    })

    
})




//step3
const port= 8081
app.listen(port,()=>{
    console.log(`${port} :after listening`);
})