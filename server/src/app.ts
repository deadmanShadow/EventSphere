
import cookieParser from 'cookie-parser';
import cors from "cors";
import express from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";
import router from "./app/routes";

const app = express();
 

app.use(cors({
    origin: ['http://localhost:3000',"https://eventsphere-dope.vercel.app"],
    credentials: true
}));

//parser
app.use(express.json());
app.use(cookieParser());


app.use('/api', router);



app.get("/", (_req, res) => {
  res.send("EvenetSphere API is running");
});


app.use(globalErrorHandler);

app.use(notFound);

export default app;
