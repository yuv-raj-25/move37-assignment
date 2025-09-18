import http from "http";
import dotenv from "dotenv";
import app from "./app.js";
import { initWebSocket } from "./utility/websocket.js";


dotenv.config();


const server = http.createServer(app);
initWebSocket(server);


const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


