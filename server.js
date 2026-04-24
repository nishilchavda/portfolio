const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const portfolioRoute = require("./routes/portfolio.route")

// dotenv configuration
dotenv.config();

// reset object
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api', portfolioRoute)


// port
const PORT = process.env.PORT || 3001;

// listen
app.listen(PORT,() => {
  console.log(`✅ Server is running on ${PORT}`);
});
