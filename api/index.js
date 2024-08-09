const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./src/config/db");
const noteRoutes = require("./src/routes/noteRoutes");
const { errorHandler } = require("./src/middleware/errorHandler");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(morgan("combined"));

app.use("/api/note", noteRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
