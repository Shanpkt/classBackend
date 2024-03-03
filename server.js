const express = require('express');
const app = express();
const PORT =  3000;
let cors = require("cors");
const connectDB = require('./db');
// Middleware to parse JSON bodies
app.use(express.json());
app.use(
    cors({
        origin:"https://classinfo.vercel.app"
    })
)

let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

// Create a new user
app.post('/formData', (req, res) => {
  const newUser = req.body;
 // users.push(newUser);
  res.send(newUser);
});

app.get('/', (req, res) => {
   // const newUser = req.body;
   // users.push(newUser);
    res.send("working")
  });

// Start the server
app.listen(PORT,async () => {
   await  connectDB()
  console.log(`Server is running on port ${PORT}`);
});
