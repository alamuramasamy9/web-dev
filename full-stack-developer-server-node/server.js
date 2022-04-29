import express from 'express';
import mongoose from 'mongoose';
import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/users-controller.js";
import tuitController from "./controllers/tuits-controller.js";


const DB_CONNECTION_STRING = "mongodb+srv://alamu:alamuramasamy@cluster0.ezdpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://localhost:27017/fsd'
 mongoose.connect(CONNECTION_STRING)
//mongoose.connect("mongodb+srv://alamu:alamuramasamy@cluster0.ezdpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitController(app);
app.listen(process.env.PORT || 4000);