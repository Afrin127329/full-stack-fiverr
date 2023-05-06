import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoute from "./routes/auth.route.js";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import userRoute from "./routes/user.route.js";

// initializing our application
const app = express();

// env config
dotenv.config();

// middlewares
app.use(cors({origin: process.env.CLIENT_URL, credentials: true}));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

// database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("database connected")
    } catch (error) { 
        console.log(error);
    }
}

// Error handling middleware
app.use((err, req, res, next)=> {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went Wrong"

    return res.status(errStatus).send(errMessage);
})

app.listen(8000, ()=>{
    connect();
    console.log('Server running successfully')
})