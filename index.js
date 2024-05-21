const express = require("express");
const app = express();

const port = 3001

app.get('/',(req,res)=>{
    const data = [
    {
     rollno: 1,
     name : "Badal",
     sub : 'Science',
     city : 'Bokaro'
    },
    {
        rollno: 2,
        name : "Akash",
        sub : 'Science',
        city : 'Bokaro'
       },{
        rollno: 3,
        name : "Santosh",
        sub : 'Science',
        city : 'Noida'
       },
       {
        rollno: 4,
        name : "Suraj",
        sub : 'art',
        city : 'gaya'
       },
       {
        rollno: 5,
        name : "sandeep",
        sub : 'art',
        city : 'gurugram'
       },
       {
        rollno: 6,
        name : "sammer",
        sub : 'commerce',
        city : 'ranchi'
       }

    ]
        res.send(data)
})

app.listen(port,()=>{
    console.log(`Server is ready to work ${port} `)
})