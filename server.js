const express = require('express');
const app = express();
const PORT =  3000;

// Middleware to parse JSON bodies
app.use(express.json());

let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

// Create a new user
app.post('/formData', (req, res) => {
  const newUser = req.body;
 // users.push(newUser);
  res.status("i recived the data");
});

app.get('/', (req, res) => {
   // const newUser = req.body;
   // users.push(newUser);
    res.send("working")
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
