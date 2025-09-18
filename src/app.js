import  express  from "express";
import cors from "cors"
import { errorHandler } from "./middleware/errorHandler.js";


const app = express()

app.use(cors())
app.use(express.json());


// Routes imports

import userRoutes from "./routes/userRoutes.js";
import pollRoutes from "./routes/pollRoutes.js";
import voteRoutes from "./routes/voteRoutes.js";


app.use("/api/users", userRoutes);
app.use("/api/polls", pollRoutes);
app.use("/api/votes", voteRoutes);



app.use(errorHandler);


export default app;