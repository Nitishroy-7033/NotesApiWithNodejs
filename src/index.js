const express = require('express');
const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");
// Connect to database
connectDB();

// Initialize server
const app = express();
app.use(express.json());


app.use("/notes",noteRoutes);


app.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000");
})
